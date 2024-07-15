import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const deleteproduct =async (id)=>{
    console.log(id)
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
    });
    result=await result.json();
    if(result){
      getProducts();
    }
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
        <li>Operation</li>
      </ul>
      {
        product.map((item,index)=>
          <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.company}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteproduct(item._id)}>Delete</button>
        <Link to={"/update/"+item._id}>Update</Link>
        </li>
      </ul>
        )
      }
    </div>

  )
}

export default Product