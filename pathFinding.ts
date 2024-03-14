import { grid, ROWS, COLS, isValidCell } from "./grid";

export const DOWN = [-1, 0];
export const UP = [1, 0];
export const RIGHT = [0, 1];
export const LEFT = [0, -1];

export function findStartingPoint(matrix: string[][]): [number, number] | undefined {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === ">") {
        return [row, col];
      }
    }
  }
  return undefined;
}

export function findNextMove(currentRow: number, currentCol: number): [number, number] | null {
  let char = grid[currentRow][currentCol];
  const directions = {
    "+": [LEFT, DOWN, UP, RIGHT],
    "-": [LEFT, RIGHT],
    "|": [DOWN, UP],
  };

  let validMoves = directions["+"];
  if (char === "-") {
    validMoves = directions["-"];
  } else if (char === "|") {
    validMoves = directions["|"];
  }

  for (let move of validMoves) {
    let [rowOffset, colOffset] = move;
    const newRow = currentRow + rowOffset;
    const newCol = currentCol + colOffset;
    if (isValidCell(newRow, newCol)) {
      return [newRow, newCol];
    }
  }

  return null;
}
