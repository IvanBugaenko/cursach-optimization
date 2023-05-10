import { useEffect, useState } from "react";
import "./css/Doska.css";

function QueenPuzzle(props) {
    const { coords } = props;

    const [board, setBoard] = useState(
        Array(coords.length).fill().map(() => Array(coords.length).fill(false))
    );

    useEffect(() => {
        let size = coords.length;
        const queenSpawn = (coords) => {
            const newBoard = Array(size).fill().map(() => Array(size).fill(false));
            coords.forEach((xy) => {
                newBoard[xy[1]][xy[0]] = true;
            });
            setBoard(newBoard);
        };
        queenSpawn(coords);
    }, [coords]);

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
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default QueenPuzzle;
