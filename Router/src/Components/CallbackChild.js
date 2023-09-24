import { React,memo } from "react";


 function CallbackChild({learning}) {
   console.log("call back child rerender");
    
  return (
    <div>
      <h3>Inside Callback Child</h3>

    </div>
  )
}

//this work not for function 
export default memo(CallbackChild);