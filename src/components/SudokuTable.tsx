/* eslint-disable no-loop-func */
import "./SudokuTable.css";
import NumberField from "./NumberField";
import { useState } from "react";
import * as UtilityFunctions from "../utils/functions";

enum Difficulty {
  EASY = 0.35,
  MEDIUM = 0.5,
  HARD = 0.65,
  UNDEFINED,
}

function SudokuTable() {
  const [finalGrid, setFinalGrid] = useState<number[][]>(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 999))
  );
  const [selectedDifficulty, setDifficulty] = useState<Difficulty>(
    Difficulty.UNDEFINED
  );

  const generateSudoku = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
    const solution = generateNumbers();

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (Math.random() < difficulty) {
          solution[row][col] = 999;
        }
      }
    }
    setFinalGrid(solution);
  };

  const generateNumbers = (): number[][] => {
    let row = 0;
    let col = 0;
    const gridSolution: number[][] = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => 999)
    );
    const triedNumbers: number[][][] = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => [])
    );

    for (let index = 1; index <= 10000; index++) {
      const squareNumber = UtilityFunctions.getSquareNumber(row, col);
      const neighboredSquareNumbers =
        UtilityFunctions.getNeighboredSquareNumbers(squareNumber, gridSolution);
      const neighboredColumnNumbers =
        UtilityFunctions.getNeighboredColumnNumbers(col, gridSolution);
      const neighboredRowNumbers = gridSolution[row];
      /* console.log(
        index === 0 ? "Start" : "",
        "Index",
        index,
        [row, col],
        gridSolution[row],
        neighboredColumnNumbers,
        neighboredSquareNumbers,
        triedNumbers[row][col]
      ); */

      const validNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
        (number) =>
          !(
            neighboredRowNumbers.includes(number) ||
            neighboredColumnNumbers.includes(number) ||
            neighboredSquareNumbers.includes(number) ||
            triedNumbers[row][col].includes(number)
          )
      );

      if (validNumbers.length === 0) {
        // console.log("INVALID, Tried already:", triedNumbers[row][col]);

        // Reset current field
        gridSolution[row][col] = 999;

        // Reset current field's tried numbers
        triedNumbers[row][col] = [];

        // Step back
        if (col === 0) {
          row--;
          col = 8;
        } else {
          col--;
        }
      } else {
        const randomNumber =
          validNumbers[Math.floor(Math.random() * validNumbers.length)];
        gridSolution[row][col] = randomNumber;

        // Add drawn number to tried numbers for current field
        triedNumbers[row][col].push(randomNumber);

        if (row === 8 && col === 8) {
          console.log("Valid solution found at Index:", index);
          break;
        } else if (col === 8) {
          row++;
          col = 0;
        } else {
          col++;
        }
      }
    }
    return gridSolution;
  };

  let selectedDifficultyString = "";

  switch (selectedDifficulty) {
    case Difficulty.EASY:
      selectedDifficultyString = "Easy";
      break;

    case Difficulty.MEDIUM:
      selectedDifficultyString = "Medium";
      break;

    case Difficulty.HARD:
      selectedDifficultyString = "Hard";
      break;

    default:
      break;
  }

  return (
    <div className="SudokuTable">
      <div className="button-nav-bar">
        <button
          className="btn gen-easy"
          onClick={() => generateSudoku(Difficulty.EASY)}
        >
          Easy
        </button>
        <button
          className="btn gen-medium"
          onClick={() => generateSudoku(Difficulty.MEDIUM)}
        >
          Medium
        </button>
        <button
          className="btn gen-hard"
          onClick={() => generateSudoku(Difficulty.HARD)}
        >
          Hard
        </button>
      </div>
      <div className="grid-container-wrapper">
        <div className="grid-title">{selectedDifficultyString}</div>
        <div className="grid-container">
          {finalGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((number, colIndex) => (
                <NumberField
                  key={Math.random()}
                  row={rowIndex}
                  column={colIndex}
                  square={UtilityFunctions.getSquareNumber(rowIndex, colIndex)}
                  number={number}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SudokuTable;
