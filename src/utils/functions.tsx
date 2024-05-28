export const getSquareNumber = (rowIndex: number, colIndex: number): number => {
  switch (true) {
    case [0, 1, 2].includes(rowIndex):
      if ([0, 1, 2].includes(colIndex)) return 0;
      else if ([3, 4, 5].includes(colIndex)) return 1;
      else return 2;

    case [3, 4, 5].includes(rowIndex):
      if ([0, 1, 2].includes(colIndex)) return 3;
      else if ([3, 4, 5].includes(colIndex)) return 4;
      else return 5;

    case [6, 7, 8].includes(rowIndex):
      if ([0, 1, 2].includes(colIndex)) return 6;
      else if ([3, 4, 5].includes(colIndex)) return 7;
      else return 8;

    default:
      return 999;
  }
};

export const getNeighboredSquareNumbers = (
  squareNumber: number,
  grid: number[][]
): number[] => {
  const neighboredSquareNumbers = [];

  switch (squareNumber) {
    case 0:
      for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 1:
      for (let row = 0; row <= 2; row++) {
        for (let col = 3; col <= 5; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 2:
      for (let row = 0; row <= 2; row++) {
        for (let col = 6; col <= 8; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 3:
      for (let row = 3; row <= 5; row++) {
        for (let col = 0; col <= 2; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 4:
      for (let row = 3; row <= 5; row++) {
        for (let col = 3; col <= 5; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 5:
      for (let row = 3; row <= 5; row++) {
        for (let col = 6; col <= 8; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 6:
      for (let row = 6; row <= 8; row++) {
        for (let col = 0; col <= 2; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 7:
      for (let row = 6; row <= 8; row++) {
        for (let col = 3; col <= 5; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;

    case 8:
      for (let row = 6; row <= 8; row++) {
        for (let col = 6; col <= 8; col++) {
          neighboredSquareNumbers.push(grid[row][col]);
        }
      }
      break;
  }
  return neighboredSquareNumbers;
};

export const getNeighboredColumnNumbers = (
  col: number,
  grid: number[][]
): number[] => {
  const neighboredColumnNumbers = [];
  for (let row = 0; row < 9; row++) {
    neighboredColumnNumbers.push(grid[row][col]);
  }
  return neighboredColumnNumbers;
};
