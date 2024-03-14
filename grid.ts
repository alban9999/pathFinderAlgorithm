export const grid: string[][] = [
  ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['s', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
  [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
  [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
];

export const ROWS: number = grid.length;
export const COLS: number = grid[0].length;

export function isValidCell(row: number, col: number): boolean {  
  return row >= 0 && row < ROWS && col >= 0 && col < COLS && 
         (/[+\-|s]/.test(grid[row][col]) || /[A-Z]/.test(grid[row][col])) && grid[row][col] !== "?";
}
