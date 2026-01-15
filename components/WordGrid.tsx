import React, { useState, useEffect, useRef } from 'react';
import { CellData, Coordinate, GridState, GameMode } from '../types';
import { getLineBetweenPoints } from '../utils/gameLogic';

interface WordGridProps {
  grid: GridState;
  foundWordsCoordinates: Coordinate[][];
  onWordFound: (wordCoordinates: Coordinate[]) => void;
  gameMode?: GameMode; // Optional to support legacy usage if any
  interactionMode?: 'SELECT' | 'PAN'; // Controls touch behavior
}

export const WordGrid: React.FC<WordGridProps> = ({ 
  grid, 
  foundWordsCoordinates, 
  onWordFound,
  gameMode = GameMode.STANDARD,
  interactionMode = 'SELECT'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState<Coordinate | null>(null);
  const [currentSelection, setCurrentSelection] = useState<Coordinate[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const isAccessible = gameMode === GameMode.ACCESSIBLE;

  // Helper to check if a cell is in a list of coords
  const isCellInList = (r: number, c: number, list: Coordinate[]) => {
    return list.some(coord => coord.r === r && coord.c === c);
  };

  const getCellFromTouch = (clientX: number, clientY: number): Coordinate | null => {
    // If panning, do not detect cells
    if (isAccessible && interactionMode === 'PAN') return null;

    if (!gridRef.current) return null;
    
    // We use elementsFromPoint to handle zoomed/scrolled elements correctly
    const elements = document.elementsFromPoint(clientX, clientY);
    for (const el of elements) {
      if (el.hasAttribute('data-row') && el.hasAttribute('data-col')) {
        return {
          r: parseInt(el.getAttribute('data-row')!),
          c: parseInt(el.getAttribute('data-col')!)
        };
      }
    }
    return null;
  };

  const handlePointerDown = (r: number, c: number, e: React.PointerEvent) => {
    // IMPORTANT: If in PAN mode, do NOT stop propagation or capture pointer.
    // Let it bubble up to the parent container in App.tsx which handles Pan/Zoom.
    if (isAccessible && interactionMode === 'PAN') return; 

    e.preventDefault(); // Prevent scrolling when selecting
    e.stopPropagation(); // Stop parent from panning if we are selecting
    
    e.currentTarget.setPointerCapture(e.pointerId);
    
    setIsDragging(true);
    setStartCell({ r, c });
    setCurrentSelection([{ r, c }]);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !startCell) return;
    e.preventDefault();

    const target = getCellFromTouch(e.clientX, e.clientY);
    
    if (target) {
      const line = getLineBetweenPoints(startCell, target);
      setCurrentSelection(line);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
       e.preventDefault();
       e.currentTarget.releasePointerCapture(e.pointerId);
    }
    
    if (isDragging && currentSelection.length > 0) {
      onWordFound(currentSelection);
    }
    setIsDragging(false);
    setStartCell(null);
    setCurrentSelection([]);
  };

  return (
    <div 
      ref={gridRef}
      className={`
        select-none rounded-xl transition-all duration-300
        ${isAccessible 
           ? 'p-4 bg-[#e6dcc0] shadow-xl border-4 border-[#8b5a2b] mx-auto min-w-[500px]' // Min-width ensures it doesn't shrink too small in infinite canvas
           : 'p-3 touch-none bg-parchment-200 shadow-inner border border-wood-light/30 w-full'}
      `}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{
         // In Accessible PAN mode, allow events to bubble (auto/none handled by parent).
         // In standard mode, block default touch.
         touchAction: 'none' 
      }}
    >
      <div 
        className={`grid ${isAccessible ? 'gap-2' : 'gap-1'}`}
        style={{ 
          gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))` 
        }}
      >
        {grid.cells.map((row, r) => (
          row.map((cell, c) => {
            const isSelected = isCellInList(r, c, currentSelection);
            const isFound = foundWordsCoordinates.some(wordCoords => isCellInList(r, c, wordCoords));

            // Determine Styles based on Mode
            let cellStyle = '';
            
            if (isAccessible) {
               // --- Tactile / Tile Style for Accessibility ---
               if (isFound) {
                  // Success state: Green, depressed
                  cellStyle = 'bg-nature-dark text-white border-nature-dark translate-y-1 shadow-none opacity-100';
               } else if (isSelected) {
                  // Selection state: High contrast Blue
                  cellStyle = 'bg-blue-600 text-white border-blue-800 -translate-y-1 shadow-lg z-20 scale-110';
               } else {
                  // Default state: Raised Tile (Tactile feel)
                  cellStyle = 'bg-[#fdfbf7] text-slate-900 border-b-4 border-r-2 border-[#d1c4a0] hover:bg-white shadow-sm';
               }
            } else {
               // --- Standard Parchment Styles ---
               if (isFound) {
                  cellStyle = 'bg-nature text-white shadow-sm scale-95';
               } else if (isSelected) {
                  cellStyle = 'bg-wood-light text-white scale-105 shadow-md z-10';
               } else {
                  cellStyle = 'bg-parchment-100 text-wood-darker hover:bg-parchment-300';
               }
            }

            return (
              <div
                key={cell.id}
                data-row={r}
                data-col={c}
                onPointerDown={(e) => handlePointerDown(r, c, e)}
                className={`
                  flex items-center justify-center cursor-pointer transition-all duration-100
                  ${isAccessible 
                    ? 'aspect-square text-xl sm:text-2xl font-bold rounded-lg' 
                    : 'aspect-square text-sm sm:text-lg font-bold rounded-sm'}
                  ${cellStyle}
                `}
              >
                {cell.letter}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};