import React from 'react'
import { useEffect } from 'react'

import './Mybutton.css'

export default function Mybutton({count,onclick}) {
useEffect(()=>{
  document.title=`you clicked ${count} times`;
})
  

  return (
    <div>
      <button onClick={onclick}>Count  {count}</button>
    </div>
  )
}
