import React, { useState } from "react";
import QueenPuzzle from "./Doska";
import Slider from "@mui/material/Slider";

function NumberInput() {
  const [value, setValue] = useState("");
  const [valueMu, setValueMu] = useState("");
  const [valueSk, setValueSk] = useState("");
  const [size, setSize] = useState();
  const [displayQueenPuzzle, setDisplayQueenPuzzle] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setDisplayQueenPuzzle(false);
  };
  const handleChangeSlide = (event, newValue) => {
    setValueMu(newValue);
  };

  const handleChangeSlide2 = (event, newValue) => {
    setValueSk(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSize(value);
    setDisplayQueenPuzzle(true);
  };
  return (
    <div>
      <div>
        <p>Вероятность мутации</p>
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
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {displayQueenPuzzle && <QueenPuzzle size={size} />}
    </div>
  );
}

export default NumberInput;
