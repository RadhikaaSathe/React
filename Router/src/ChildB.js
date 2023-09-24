import React from 'react'
import { useContext } from 'react'
import {data1,data2} from './App';
export default function ChildB() {
    let name = useContext(data1);
    let age = useContext(data2);
  return (
    <div>
      <h3>Hi I am ChildB and you are {name} your age is {age}</h3>
    </div>
  )
}
