import React, { useEffect } from 'react';
import './Prodcuts.css'

function Product() {
  const [product,setproduct]=React.useState([]);

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts=async()=>{
    let result=await fetch("http://localhost:5000/product");
    result=await result.json();
    setproduct(result);
  }

  console.warn(product);
  return (
    <div className='ProductList'>
 
      <h3 className=' text-3xl'>List</h3>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      {
        product.map((item,index)=>
          <ul key={item}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.company}</li>
        <li>{item.category}</li>
      </ul>
        )
      }
    </div>

  )
}

export default Product