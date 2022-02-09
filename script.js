function getY(y, matrix) {
  if (y === -1) {
    return matrix.length - 1;
  }

  if (y === matrix.length) {
    return 0;
  }

  return y;
}

function getX(x, y, matrix) {
  if (x === -1) {
    return matrix[y].length - 1;
  }

  if (x === matrix[y].length) {
    return 0;
  }

  return x;
}

const width = 10;
const height = 4;

// while (true) {
let board = '';

const matrix = [...Array(height)].map(() =>
  [...Array(width)].map(() => Math.floor(Math.random() * 2))
);

matrix.forEach((_, y) => {
  _.forEach((__, x) => {
    const neighbors = [
      matrix[getY(y - 1, matrix)][getX(x - 1, y, matrix)],
      matrix[getY(y - 1, matrix)][getX(x, y, matrix)],
      matrix[getY(y - 1, matrix)][getX(x + 1, y, matrix)],
      matrix[getY(y, matrix)][getX(x - 1, y, matrix)],
      matrix[getY(y, matrix)][getX(x + 1, y, matrix)],
      matrix[getY(y + 1, matrix)][getX(x - 1, y, matrix)],
      matrix[getY(y + 1, matrix)][getX(x, y, matrix)],
      matrix[getY(y + 1, matrix)][getX(x + 1, y, matrix)],
    ];

    const aliveNeighbors = neighbors.filter(n => n).length;

    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
      board += '.';
    } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
      board += '*';
    }
  });
  board += '\n';
});

console.log(board);
// }
