import React, { useState } from 'react'
import './App.css';

export default function Controlled() {
    //here react is controlling form with states
    //but if we have 12 input we have to call 12 onhange 
    //so we have name arttribute in input
    const[data,setData]=useState("Aman");
    const[pwd,setPwd]=useState("");
    function handleEvent(e){
        //console.log(e.target.value);
        if(e.target.name==="firstName"){
            setData(e.target.value);
        }
        else{ 
            setPwd(e.target.value);
        }
       

      }
  return (
    <div className='App'>
      <h1>Practice React forms</h1>
    <form>
      <label>FirstName</label>
      <input type="text" name="firstName"  onChange={handleEvent}></input>
      <br></br>
      <label>password</label>
      <input type="password" name="password" onChange={handleEvent}></input>
    </form>
    </div>
  )
}
