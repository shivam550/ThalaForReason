import React, { useState } from "react";
import "./Thala.css";
import Video from "./Video";

function Thala() {
  const [inputValue , setInputValue] = useState('')
  const [showOutput, setShowOutput] = useState('');

  const handleInputChange = (event)=> {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  }

  function handleClick() {
    setInputValue('')
    setShowOutput(`You favourite text is not your favourite`)  
  

  }

  return (
    <main className="container">
      <h2 className="heading-text">Just Random Game</h2>
      <input
        type="text"
        placeholder="enter your favourite text"
        className="input-bar"
        value={inputValue} // Set the value of the input to our state
        onChange={handleInputChange} // Call the handler whenever input changes
      />
      <button className="btn" onClick={handleClick}>
        Search
      </button>
      <div className="output-container">
        {inputValue.length == 7 ? <Video /> : showOutput}
      </div>
      <p className="footer-text">Code by Shivam❤️</p>
    </main>
  );
}

export default Thala;
