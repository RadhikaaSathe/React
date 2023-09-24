import React, { useCallback, useState } from 'react'

import CALLBACKCHILD from './CallbackChild'
export default function CallbackHook() {

    const[add,setAdd]=useState(0);

    ////this rerender child again and again even if we have wrap
//child in memo
    // let learning = function(){
    //     console.log("in learning")
    // }
    //so use callback hook so that child will not render on function also
    let learning= useCallback(()=>
    {
console.log("in learning")
    },[]); 
  return (
    <div>
      <h2>In Callback Hook</h2>
      <button onClick={()=>{setAdd(add+1)}}>Add{add}</button>
      
     
      <CALLBACKCHILD learning={learning}/>
    </div>
  )
}
