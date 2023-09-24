
import './App.css';
import {  createContext, useEffect, useState } from 'react';
import REFHOOK from './Components/Refhook';
import  REFHOOKPRACTICE from './Components/RefHookPractice';
import CHILDA from './ChildA';
import MEMOHOOK from './Components/MemoHook';
import CALLBACKHOOK from './Components/CallbackHook';
const data1 = createContext();
  const data2= createContext();
function App() {
  //Context hook
  
  let name="shraddha";
  let age="25";
  
  //context hook



const [count,setCount]=useState(0);
const[data,setData]=useState("Aman")
function updateCount(){
  setCount(count+1);
}
function updatedata(){
  setData("Shradhha");
}
useEffect(()=>{
  console.log("Calling use effect");
},[count])


  return (
    <div className="App">
      <h1>Practice Hook</h1>
      <p>Button clikced {count} times</p>
      <button onClick={updateCount}>Count {count}</button>
      <br></br>
      <br></br>
      <button onClick={updatedata}>{data} Clicked button</button>
    <br></br>
    <br></br>
   {/* <REFHOOK />  */}
    {/* <REFHOOKPRACTICE/> */}
    {/* <data1.Provider value={name}>
      <data2.Provider value={age}>
    <CHILDA/>
    </data2.Provider>
    </data1.Provider> */}
    
    {/* <MEMOHOOK/> */}
{/* <CALLBACKHOOK/> */}

    </div>
  );
}

export default App;
export {data1 ,data2}
