import "./NumberField.css";

interface NumberFieldProps {
  number: number;
  row: number;
  column: number;
  square: number;
}

function NumberField(props: NumberFieldProps) {
  const { number, row, column, square } = props;

  const topLine = [0, 3, 6].includes(row);
  const rightLine = [2, 5, 8].includes(column);
  const bottomLine = [8].includes(row);
  const leftLine = [0].includes(column);

  let className = "NumberField";
  if (topLine) {
    className = className + " top-line";
  }
  if (rightLine) {
    className = className + " right-line";
  }
  if (bottomLine) {
    className = className + " bottom-line";
  }
  if (leftLine) {
    className = className + " left-line";
  }

  return (
    <div
      className={className}
      onClick={() =>
        console.log(
          "Reihe:",
          row + 1,
          "Spalte:",
          column + 1,
          "Quadrat:",
          square + 1
        )
      }
    >
      {!(number > 9) && number}
    </div>
  );
}

export default NumberField;
