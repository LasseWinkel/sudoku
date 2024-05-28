import "./Generator.css";
import SudokuTable from "./SudokuTable";
function Generator() {
  const exportFunction = () => {
    window.print();
  };

  return (
    <div className="Generator">
      <div className="table-container">
        <SudokuTable />
        <SudokuTable />
        <SudokuTable />
        <SudokuTable />
      </div>
      <div className="table-container last-table-container">
        <SudokuTable />
        <SudokuTable />
        <SudokuTable />
        <SudokuTable />
      </div>
      <button className="btn btn-export" onClick={exportFunction}>
        Print
      </button>
    </div>
  );
}

export default Generator;
