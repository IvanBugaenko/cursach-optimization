import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

function Settings(props) {
    const {updateAlgParams, alg_params} = props;
    const [valueMu, setValueMu] = useState("");
    const [valueSk, setValueSk] = useState("");

    const handleChangePop = (event) => {
        updateAlgParams("population_dim", event.target.value);
    };

    const handleChangeStep = (event) => {
        updateAlgParams("steps", event.target.value);
    };

    const handleChangeValueMut = (event) => {
        updateAlgParams("exchange_num", event.target.value);
    };

    const handleChangeSize = (event) => {
        updateAlgParams("tournament_size", event.target.value);
    };

    const handleChangeSlide = (event, newValue) => {
        setValueMu(newValue);
        updateAlgParams("mutation_probability", newValue);
    };
    const handleChangeSlide2 = (event, newValue) => {
        setValueSk(newValue);
        updateAlgParams("crossing_probability", newValue);
    };

    return (
        <div>
            <div>
                <div>
                    <TextField
                        size="small"
                        defaultValue={alg_params["population_dim"]}
                        id="standard-basic"
                        label="Размер популяции"
                        variant="standard"
                        onChange={handleChangePop}
                    />
                    <TextField
                        size="small"
                        defaultValue={alg_params["tournament_size"]}
                        id="standard-basic"
                        label="Размер турнира"
                        variant="standard"
                        onChange={handleChangeSize}
                    />
                    <br></br>
                    <TextField
                        size="small"
                        defaultValue={alg_params["steps"]}
                        id="standard-basic"
                        label="Число шагов"
                        variant="standard"
                        onChange={handleChangeStep}
                    />
                    <TextField
                        size="small"
                        defaultValue={alg_params["exchange_num"]}
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
