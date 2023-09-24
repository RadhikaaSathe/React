import React from 'react'
import './listRender.css'
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listitems = products.map((product)=><li key={product.id} style={{color:product.isFruit ?  "Red" : "black" }}>{product.title}</li>);
export default function listRender() {
  return (
    <div>
        <div className='innerdiv'>
      <h3>In List Render</h3>
     <ul>{listitems}</ul>
     </div>
    </div>
  )
}
