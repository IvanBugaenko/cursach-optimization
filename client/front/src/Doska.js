import { useState } from "react";
import "./css/Doska.css";

function QueenPuzzle(props) {
    const size = parseInt(props["size"]);
    // console.log(size)
    const [board, setBoard] = useState(
        Array(size)
            .fill()
            .map(() => Array(size).fill(false))
    );

    const handleSquareClick = (row, col) => {
        const newBoard = [...board];
        newBoard[row][col] = !newBoard[row][col];
        setBoard(newBoard);
    };

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((square, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`square ${
                                (rowIndex + colIndex) % 2 === 0 ? "even" : "odd"
                            } ${square ? "queen" : ""}`}
                            onClick={() =>
                                handleSquareClick(rowIndex, colIndex)
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default QueenPuzzle;
