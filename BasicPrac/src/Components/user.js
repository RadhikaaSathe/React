import React from 'react'


const user1={
    name:"Aman",
    age:"25",
};

export default function user() {

  return (
    <div>
      <h3>IN User Component</h3>
      <p>Hi {user1.name} your age is {user1.age}</p>
    </div>
  )
}
