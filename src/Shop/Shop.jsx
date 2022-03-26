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
    //     const newCart =[...cart,product];
    //    console.log(newCart)
    //    setCart(newCart)
         const newCart =[...cart,product];
        if(newCart.length > 4){
            alert('select your product fill up ')
            }else{
                setCart(newCart)
                
            }
       
    }
    return (
        <div className="displayProduct">
            <div className=" shop-content"> 
          {
               products.map(product => <Product
                handelToCart={handelToCart}
                key={product.id}
                product={product} 
                ></Product>)
           }
      
            </div>
            <div className="">
                <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;