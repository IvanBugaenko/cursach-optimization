import React, { useState } from "react";
import QueenPuzzle from "./Doska";

function NumberInput() {
  const [value, setValue] = useState("");
  const [size, setSize] = useState();
  const [displayQueenPuzzle,setDisplayQueenPuzzle ] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setDisplayQueenPuzzle(false);
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSize(value);
    setDisplayQueenPuzzle(true);
    
  };
  return (
    <div>
      <h2>Введите число от 1 до 20:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
     {displayQueenPuzzle && <QueenPuzzle size = {size}/>}
    </div>
  );
}

export default NumberInput;
