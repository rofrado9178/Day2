const transpose = function (matrix) {
  // const rows = matrix[0].length;
  // //console.log('rows:', rows);
  // const cols = matrix.length;
  // //console.log('column:', cols);
  // const grid = [];
  // for (let i = 0; i < rows; i++) {
  //   const newRow = [];
  //   for (let j = 0; j < cols; j++) {
  //     newRow.push(matrix[j][i]);
  //   }
  //   grid.push(newRow);
  // }
  // return grid;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

//test
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// ----
// 1 3 5
// 2 4 6
// ----
// 1
// 2
// 3
// 4
// 5
// 6
// 7
