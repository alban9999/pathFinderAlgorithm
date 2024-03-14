"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNextMove = exports.findStartingPoint = exports.LEFT = exports.RIGHT = exports.UP = exports.DOWN = void 0;
const grid_1 = require("./grid");
exports.DOWN = [-1, 0];
exports.UP = [1, 0];
exports.RIGHT = [0, 1];
exports.LEFT = [0, -1];
function findStartingPoint(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === ">") {
                return [row, col];
            }
        }
    }
    return undefined;
}
exports.findStartingPoint = findStartingPoint;
function findNextMove(currentRow, currentCol) {
    let char = grid_1.grid[currentRow][currentCol];
    const directions = {
        "+": [exports.LEFT, exports.DOWN, exports.UP, exports.RIGHT],
        "-": [exports.LEFT, exports.RIGHT],
        "|": [exports.DOWN, exports.UP],
    };
    let validMoves = directions["+"];
    if (char === "-") {
        validMoves = directions["-"];
    }
    else if (char === "|") {
        validMoves = directions["|"];
    }
    for (let move of validMoves) {
        let [rowOffset, colOffset] = move;
        const newRow = currentRow + rowOffset;
        const newCol = currentCol + colOffset;
        if ((0, grid_1.isValidCell)(newRow, newCol)) {
            return [newRow, newCol];
        }
    }
    return null;
}
exports.findNextMove = findNextMove;
