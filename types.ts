export enum ScreenState {
  LOGIN = 'LOGIN',
  MENU = 'MENU',
  BOOKS = 'BOOKS',
  LEVEL_SELECT = 'LEVEL_SELECT',
  GAME = 'GAME',
  PROFILE = 'PROFILE',
}

export enum GameMode {
  STANDARD = 'STANDARD',
  ACCESSIBLE = 'ACCESSIBLE',
}

export interface UserProfile {
  name: string;
  isGuest: boolean;
  avatarId: number; // ID corresponding to a color/icon combo
}

export interface WordConfig {
  word: string; // The normalized word for the grid (e.g., "ANCIAO")
  display: string; // The display word (e.g., "ANCIÃO")
}

export interface LevelData {
  id: string;
  reference: string; // e.g., "2 João 1:1"
  text: string; // The full verse text
  words: WordConfig[]; // Words to find
}

export interface BookData {
  id: string;
  name: string;
  testament: 'Old' | 'New';
  totalVerses: number; // Represents the total number of levels (1 verse = 1 level)
  isLocked: boolean;
  levels: LevelData[];
}

// Coordinate in the grid
export interface Coordinate {
  r: number;
  c: number;
}

export interface CellData {
  letter: string;
  id: string; // unique id for key
}

export interface GridState {
  rows: number;
  cols: number;
  cells: CellData[][]; // [row][col]
  solutions: Record<string, Coordinate[]>; // word -> array of coordinates
}