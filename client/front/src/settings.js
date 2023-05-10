import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

function Settings(props) {
    const [valueMu, setValueMu] = useState("");
    const [valueSk, setValueSk] = useState("");

    let dictionary = {
        N: "8",
        population_dim: "100",
        tournament_size: "5",
        crossing_probability: "0.85",
        mutation_probability: "0.15",
        exchange_num: "3",
        steps: "100",
    };
    const handleChangePop = (event, newValue) => {
        dictionary["population_dim"] = event.target.value;
        props.onData(dictionary);
    };

    const handleChangeStep = (event, newValue) => {
        dictionary["steps"] = event.target.value;
    };

    const handleChangeValueMut = (event, newValue) => {
        dictionary["exchange_num"] = event.target.value;
    };

    const handleChangeSize = (event, newValue) => {
        dictionary["tournament_size"] = event.target.value;
    };

    const handleChangeSlide = (event, newValue) => {
        setValueMu(newValue);
        dictionary["mutation_probability"] = newValue;
    };
    const handleChangeSlide2 = (event, newValue) => {
        setValueSk(newValue);
        dictionary["crossing_probability"] = newValue;
        // console.log(dictionary)
    };

    return (
        <div>
            <div>
                <div>
                    <TextField
                        size="small"
                        defaultValue={dictionary["population_dim"]}
                        id="standard-basic"
                        label="Размер популяции"
                        variant="standard"
                        onChange={handleChangePop}
                    />
                    <TextField
                        size="small"
                        defaultValue={dictionary["tournament_size"]}
                        id="standard-basic"
                        label="Размер турнира"
                        variant="standard"
                        onChange={handleChangeSize}
                    />
                    <br></br>
                    <TextField
                        size="small"
                        defaultValue={dictionary["steps"]}
                        id="standard-basic"
                        label="Число шагов"
                        variant="standard"
                        onChange={handleChangeStep}
                    />
                    <TextField
                        size="small"
                        defaultValue={dictionary["exchange_num"]}
                        id="standard-basic"
                        label="Количество мутаций"
                        variant="standard"
                        onChange={handleChangeValueMut}
                    />
                </div>
                <p>Вероятность мутации </p>
                <Slider
                    value={valueMu}
                    onChange={handleChangeSlide}
                    step={0.01}
                    min={0}
                    max={1}
                    valueLabelDisplay="auto"
                    sx={{
                        width: 300,
                        color: "gray",
                    }}
                />
            </div>

            <div>
                <p>Вероятность скрещивания</p>
                <Slider
                    value={valueSk}
                    onChange={handleChangeSlide2}
                    step={0.01}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1}
                    sx={{
                        width: 300,
                        color: "gray",
                    }}
                />
            </div>

            <div></div>
        </div>
    );
}

export default Settings;
