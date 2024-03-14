"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCell = exports.COLS = exports.ROWS = exports.grid = void 0;
exports.grid = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['s', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
];
exports.ROWS = exports.grid.length;
exports.COLS = exports.grid[0].length;
function isValidCell(row, col) {
    return row >= 0 && row < exports.ROWS && col >= 0 && col < exports.COLS &&
        (/[+\-|s]/.test(exports.grid[row][col]) || /[A-Z]/.test(exports.grid[row][col])) && exports.grid[row][col] !== "?";
}
exports.isValidCell = isValidCell;
