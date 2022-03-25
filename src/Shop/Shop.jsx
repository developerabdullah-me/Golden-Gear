import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>
    fetch('GoldenData.json')
    .then(res => res.json())
    .then(data =>setProducts(data))
    ,[])
    
    return (
        <div className="row">
            <div className="col-md-10 ">
          <div className="shop-content">
          {
               products.map(product => <Product product={product} ></Product>)
           }
          </div>
            </div>
            <div className="col-md-2"><h1>Tumi</h1></div>
        </div>
    );
};

export default Shop;