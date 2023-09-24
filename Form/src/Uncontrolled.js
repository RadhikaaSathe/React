import React, { useRef } from 'react'

export default function Uncontrolled() {
    const ref= useRef();
    const ref2= useRef();
    //uncontrolled compo are managed by DOM
    //we use useRef hook to manipulate dom directly
    function submitForm(e){
       e.preventDefault();
       console.log(ref.current.value);
       console.log(ref2.current.value);

    } 
  return (
    <div>
      <h1>Uncontrolled compo</h1>
      <form onSubmit={submitForm}>
      <label>FirstName</label>
      <input type="text" ref={ref} ></input>
      <br></br>
      <label>Address</label>
      <input type="text" ref={ref2}></input>
      <br></br>
      <button>Submit</button>
      
    </form>
    </div>
  )
}
