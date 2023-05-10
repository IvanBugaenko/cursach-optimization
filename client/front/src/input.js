import React, { useState } from "react";
import QueenPuzzle from "./Doska";

import { IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Settings from "./settings";

function NumberInput() {
    const [value, setValue] = useState("");
    const [displayQueenPuzzle, setDisplayQueenPuzzle] = useState(false);
    const [displaySettings, setDisplaySettings] = useState(false);

    const [alg_params, setAlgParams] = useState({
        N: "8",
        population_dim: "100",
        tournament_size: "5",
        crossing_probability: "0.85",
        mutation_probability: "0.15",
        exchange_num: "3",
        steps: "100",
    });
    const [alg_results, setAlgResults] = useState({
        arrangement: [],
    });

    const updateAlgParams = (key, value) => {
        let new_params = { ...alg_params };
        new_params[key] = value;
        setAlgParams(new_params);
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        updateAlgParams("N", newValue);
        setDisplayQueenPuzzle(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: вынести в .env
        fetch(`http://localhost:10002/algorithm/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(alg_params),
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("Ошибка при запросе данных");
            })
            .then((data) => {
                data["arrangement"] = decodeCoords(data["arrangement"]);
                data["cache"].forEach((item) => {
                    item[0] = decodeCoords(item[0]);
                });
                setAlgResults(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

        setDisplayQueenPuzzle(true);
    };

    const decodeCoords = (arr) => {
        function* enumerate(it, start = 0) {
            let i = start;
            for (const x of it) yield [i++, x];
        }

        return [...enumerate(arr)];
    };

    const setSettings = () => {
        setDisplaySettings(!displaySettings);
    };

    return (
        <div>
            <h2>
                Задача о 8 ферзях{" "}
                <IconButton onClick={setSettings}>
                    <TuneIcon variant="contained" />{" "}
                </IconButton>{" "}
            </h2>
            {displaySettings && (
                <Settings
                    updateAlgParams={updateAlgParams}
                    alg_params={alg_params}
                />
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <button type="submit" className="send">
                    Submit
                </button>
            </form>
            {displayQueenPuzzle && (
                <QueenPuzzle coords={alg_results["arrangement"]} />
            )}
        </div>
    );
}

export default NumberInput;
