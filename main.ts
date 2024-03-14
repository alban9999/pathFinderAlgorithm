import { grid } from "./grid";
import { findStartingPoint, findNextMove } from "./pathFinding";

const findPath = (matrix: string[][]) => {
  const startingPoint = findStartingPoint(matrix);
  if (startingPoint === undefined) {
    return "invalid grid";
  } else {
    let currentRow = startingPoint[0];
    let currentCol = startingPoint[1];
    let currentChar = matrix[currentRow][currentCol];
    let path = "";
    let letters = "";

    while (currentChar !== "s") {
      const nextMove = findNextMove(currentRow, currentCol);
      if (nextMove === null) {
        break;
      }

      [currentRow, currentCol] = nextMove;
      const nextChar = matrix[currentRow][currentCol];

      if ((currentChar === "-" && nextChar === "|") || (currentChar === "|" && nextChar === "-")) {
        break;
      }

      path += nextChar;
      if (/[A-Z]/.test(nextChar)) {
        letters += nextChar;
      }

      matrix[currentRow][currentCol] = "?";

      if (nextChar === "s") {
        break;
      }

      currentChar = nextChar;
    }

    if (path.includes('s')) {
        return `path=${path}\nletters=${letters}`;
    } else {
        return "Path to s not found!";
    }
  }
};

console.log(findPath(grid));
