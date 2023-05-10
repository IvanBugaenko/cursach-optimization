import React, { useState } from "react";
import QueenPuzzle from "./Doska";

import { IconButton} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Settings from "./settings";

function NumberInput() {
  const [value, setValue] = useState("");
 
  const [size, setSize] = useState();
  const [displayQueenPuzzle, setDisplayQueenPuzzle] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(false);
  let datas;
  const handleChildData = (data) => {
    datas = data;
  };
 
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

  const setSettings = () =>{
    setDisplaySettings(!displaySettings);
  }
 
  return (
    <div>
      <h2>Задача о 8 ферзях <IconButton onClick={setSettings} ><TuneIcon  variant="contained" /> </IconButton> </h2>
      {displaySettings && <Settings onData={handleChildData} />}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit" className="send">Submit</button>
      </form>
      {displayQueenPuzzle && <QueenPuzzle size={size} />}
    </div>
  );
}

export default NumberInput;
