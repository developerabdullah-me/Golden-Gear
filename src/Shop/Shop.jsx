import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Question/Question';
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
         const newCart =[...cart,product];
        if(newCart.length > 4){
            alert('select your product fill up ')
            }else{
                setCart(newCart)
                } };

                const clearCart=()=>{
                    setCart([])
                }

    return (
        <div className="">
            <div className="Shop-container ">
            <div className=" shop-content"> 
          {
               products.map(product => <Product
                handelToCart={handelToCart}
                key={product.id}
                product={product} 

                ></Product>) }
      
            </div>
            <div className=" cart-container">
                <Cart 
            clearCart={clearCart}
                 cart={cart}></Cart>
                </div>
                
        </div>
        <Question></Question>
        </div>
    );
};

export default Shop;