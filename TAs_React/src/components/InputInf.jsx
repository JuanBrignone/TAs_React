import React, { useRef, useState } from "react";

export const InputInf = () => {
  const text = useRef("");
  const [inputValue, setInuputValue] = useState("")
  
  const handleChange = () =>{
    setInuputValue(text.current.value)
  }

  return (
    <div className="Input">
      <h2>Text Input</h2>
      Text input: <input ref={text} name="myInput" onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
