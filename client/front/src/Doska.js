import { useCallback, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import "./css/Doska.css";

function QueenPuzzle(props) {
    const { cache } = props;

    const [board, setBoard] = useState([]);
    const [algStep, setAlgStep] = useState(cache.length);

    const updateBoard = useCallback((idx) => {
        const coords = cache[idx][0];
        const size = coords.length;
        const newBoard = Array(size).fill().map(() => Array(size).fill(false));
        coords.forEach((xy) => {
            newBoard[xy[1]][xy[0]] = true;
        });
        setBoard(newBoard);
    }, [cache]);

    useEffect(() => {
        updateBoard(cache.length - 1);
        setAlgStep(cache.length);
    }, [cache, updateBoard]);

    const handleChangeSlide = (event, newValue) => {
        setAlgStep(newValue);
        updateBoard(newValue - 1);
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
                        />
                    ))}
                </div>
            ))}
            <Slider
                value={algStep}
                onChange={handleChangeSlide}
                step={1}
                valueLabelDisplay="auto"
                min={1}
                max={cache.length}
                sx={{
                    width: 300,
                    color: "gray",
                }}
            />
            <br />
        </div>
    );
}

export default QueenPuzzle;
