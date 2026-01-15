import { CellData, Coordinate, GridState, WordConfig } from '../types';

const GRID_SIZE = 13;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Helper to remove accents for grid generation
export const normalizeWord = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
};

const getRandomLetter = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

// Internal function to attempt one grid generation
const tryGenerateGrid = (words: WordConfig[]): { grid: GridState, placedCount: number } | null => {
  // Initialize empty grid
  const cells: CellData[][] = Array(GRID_SIZE).fill(null).map((_, r) => 
    Array(GRID_SIZE).fill(null).map((_, c) => ({
      letter: '',
      id: `${r}-${c}`
    }))
  );

  const solutions: Record<string, Coordinate[]> = {};
  let placedCount = 0;

  // Sort words by length descending to place largest first (optimization)
  const sortedWords = [...words].sort((a, b) => b.word.length - a.word.length);

  // Try to place each word
  for (const wConfig of sortedWords) {
    const word = wConfig.word;
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 150) {
      attempts++;
      const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
      const rowStep = direction === 0 ? 0 : 1;
      const colStep = direction === 1 ? 0 : 1;
      
      // Random start position
      const startRow = Math.floor(Math.random() * GRID_SIZE);
      const startCol = Math.floor(Math.random() * GRID_SIZE);

      // Check boundaries
      const endRow = startRow + (word.length - 1) * rowStep;
      const endCol = startCol + (word.length - 1) * colStep;

      if (endRow >= GRID_SIZE || endCol >= GRID_SIZE) continue;

      // Check overlap validity
      let canPlace = true;
      for (let i = 0; i < word.length; i++) {
        const r = startRow + i * rowStep;
        const c = startCol + i * colStep;
        const currentLetter = cells[r][c].letter;
        if (currentLetter !== '' && currentLetter !== word[i]) {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        const coords: Coordinate[] = [];
        for (let i = 0; i < word.length; i++) {
          const r = startRow + i * rowStep;
          const c = startCol + i * colStep;
          cells[r][c].letter = word[i];
          coords.push({ r, c });
        }
        solutions[word] = coords;
        placed = true;
        placedCount++;
      }
    }
  }

  // Fill remaining spaces with random letters
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (cells[r][c].letter === '') {
        cells[r][c].letter = getRandomLetter();
      }
    }
  }

  return {
    grid: {
      rows: GRID_SIZE,
      cols: GRID_SIZE,
      cells,
      solutions
    },
    placedCount
  };
};

export const generateGrid = (words: WordConfig[]): GridState => {
  let bestResult: { grid: GridState, placedCount: number } | null = null;
  
  // Try to generate a perfect grid up to 50 times
  for (let i = 0; i < 50; i++) {
    const result = tryGenerateGrid(words);
    if (result) {
      if (result.placedCount === words.length) {
        return result.grid; // Found a perfect grid
      }
      if (!bestResult || result.placedCount > bestResult.placedCount) {
        bestResult = result;
      }
    }
  }

  // If we couldn't place all words after retries, return the best we got 
  // (though ideally we should handle this UI side, but this ensures app doesn't crash)
  if (bestResult) {
    console.warn(`Generated imperfect grid. Placed ${bestResult.placedCount}/${words.length} words.`);
    return bestResult.grid;
  }
  
  throw new Error("Failed to generate grid");
};

export const getLineBetweenPoints = (start: Coordinate, end: Coordinate): Coordinate[] => {
  const points: Coordinate[] = [];
  const dr = end.r - start.r;
  const dc = end.c - start.c;
  
  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  if (steps === 0) return [{ r: start.r, c: start.c }];

  // Simple interpolation
  for (let i = 0; i <= steps; i++) {
    let r = start.r;
    let c = start.c;

    // Check if close to horizontal
    if (Math.abs(dr) < Math.abs(dc) / 2) {
       // Horizontal
       c = start.c + (i * (dc > 0 ? 1 : -1));
       r = start.r;
    } 
    // Check if close to vertical
    else if (Math.abs(dc) < Math.abs(dr) / 2) {
      // Vertical
      r = start.r + (i * (dr > 0 ? 1 : -1));
      c = start.c;
    }
    // Diagonal
    else {
      r = start.r + (i * (dr > 0 ? 1 : -1));
      c = start.c + (i * (dc > 0 ? 1 : -1));
    }
    
    points.push({r, c});
  }

  return points;
};