// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
const readline = require('readline-sync');

function readMatrix(promptMessage) {
    console.log(promptMessage);
    const rows = readline.questionInt('Enter number of rows: ');
    const cols = readline.questionInt('Enter number of columns: ');
    
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        const line = readline.question(`Enter row ${i + 1}: `);
        const rowValues = line.trim().split(/\s+/).map(Number);
        matrix.push(rowValues);
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let transposed = [];
    
    for (let c = 0; c < cols; c++) {
        let newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function addMatrices(matA, matB) {
    const rows = matA.length;
    const cols = matA[0].length;
    let result = [];
    
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matA[i][j] + matB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(matA, matB) {
    const rowsA = matA.length;
    const colsA = matA[0].length;
    const rowsB = matB.length;
    const colsB = matB[0].length;
    
    if (colsA !== rowsB) {
        console.log("Error: Number of columns in A must equal number of rows in B.");
        return null;
    }
    
    let result = [];
    for (let i = 0; i < rowsA; i++) {
        let newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matA[i][k] * matB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log("=== PART A: Transpose a Matrix ===");
    let matrixA = readMatrix("Enter matrix for Transpose:");
    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);
    console.log("Transposed Matrix:");
    displayMatrix(transposeMatrix(matrixA));
    
    console.log("\n=== PART B: Add Two Matrices ===");
    console.log("Enter Matrix 1 for Addition:");
    let mat1 = readMatrix("Matrix 1:");
    console.log("Enter Matrix 2 for Addition (Must be same size):");
    let mat2 = readMatrix("Matrix 2:");
    
    if (mat1.length === mat2.length && mat1[0].length === mat2[0].length) {
        console.log("\nSum Matrix:");
        displayMatrix(addMatrices(mat1, mat2));
    } else {
        console.log("Error: Matrices must have the exact same dimensions for addition.");
    }
    
    console.log("\n=== PART C: Multiply Two Matrices ===");
    console.log("Enter Matrix A for Multiplication:");
    let multA = readMatrix("Matrix A:");
    console.log("Enter Matrix B for Multiplication:");
    let multB = readMatrix("Matrix B:");
    
    let product = multiplyMatrices(multA, multB);
    if (product) {
        console.log("\nProduct Matrix (A x B):");
        displayMatrix(product);
    }
}

main();
// =============================================================================

const readlineSync = require('readline-sync');

