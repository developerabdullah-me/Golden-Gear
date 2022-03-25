import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>
    fetch('GoldenData.json')
    .then(res => res.json())
    .then(data =>setProducts(data))
    ,[])
    const handelToCart=(product)=>{
        // console.log(product)
        for (const product of cart){
            console.log(product)
        }
        const newCart=[...cart,product.name]
        setCart(newCart)
    }
    return (
        <div className="row">
            <div className="col-md-10 ">
          <div className="shop-content">
          {
               products.map(product => <Product
                handelToCart={handelToCart}
                key={product.id}
                product={product} 
                
                ></Product>)
           }
          </div>
            </div>
            <div className="col-md-2"><h1>Tumi
                </h1>
                <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;