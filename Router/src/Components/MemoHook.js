import React, { useMemo } from 'react'
import { useState } from 'react'
export default function MemoHook() {
    
    const[add,setAdd]=useState(0);
    const[sub,Setsub]=useState(100);
    //it will call use memo only when add is called
    //otherwise in normal cases it calles multi on sub also 
     let multi = useMemo(()=>{
        console.log("********");
        return add*10;
     },[add]);
     return(
    <div>
      <h1>Inside MemoHook</h1>
      <p>Multiplication {multi}</p>
      <button onClick={()=>{setAdd(add+1)}}>Addition {add}</button>
      <br></br>
      <br></br>
      <button onClick={()=>{Setsub(sub-1)}}>Subtraction {sub}</button>
    </div>
    )
}
