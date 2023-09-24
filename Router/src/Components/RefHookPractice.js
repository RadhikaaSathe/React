import React from 'react'
import { useState,useRef } from 'react'

export default function RefHookPractice() {
const [name,setName]=useState("Shraddha");
const ref=useRef("");
function changeColor(){
    ref.current.style.fontWeight="600";
ref.current.style.color="blue";
}
  return (
    <div>
      <h3>Inside Refhook Practice</h3>
      <input ref={ref} value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={changeColor}>Changecolor</button>
    </div>
  )
}
