import React from 'react'
import { useState,useRef } from 'react'

export default function Refhook() {
    const[name,SetName]=useState("Shraddha");
    const ref = useRef("");

    function reset(){
        SetName("");
        ref.current.focus();
        
       
    }
    function handlecolor(){
ref.current.style.color="blue";
    }
  return (
    <div>
        <h3>Inside Refhook Component</h3>
      <input ref={ref} type="text" value={name} onChange={(e)=>SetName(e.target.value)}></input>
      <br></br>
      <br></br>
      <button onClick={reset}>Reset</button>
      <br></br>
      <br></br>
      <button onClick={handlecolor}>Color Change</button>
    </div>
  )
}
