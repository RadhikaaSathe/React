import React from 'react'
import { useState } from 'react';
import MYBUTTON from './Components/Mybutton'

export default function Mycount() {
    const [count,setCount]= useState(0);
  function handleClick(){
      setCount(count+1);
  }
  return (
    <div>
        <h1>Counters that update together</h1>
      <MYBUTTON count={count} onclick={handleClick}/>
      <MYBUTTON count={count} onclick={handleClick}/>
     
    </div>
  )
}
