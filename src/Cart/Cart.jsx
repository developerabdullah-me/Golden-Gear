import React, { useState } from 'react';
import './Cart.css'
const Cart = ({cart,clearCart}) => {
    const [random,setRandom]=useState({})
   
   const randomButton=(cart)=>{
   let rand = Math.floor(Math.random()*cart.length);
   let rValue = cart[rand];
   setRandom(rValue)

}

  return (
        <div className=" cart">
           
         <div>

                   {
                            cart.map((product)=>(
                            <div className="d-flex align-items-center">
                            <p key={product.id}> {product.name}</p>
                            <img className="w-50" src={product.img} alt="" />
                        </div>
                    ))
                }
         </div>
         <div className="">
         <div className="">
             <p>{random.name}</p>
               <img src={random.img} alt="" />
                </div>
         <button className="randomChoose" onClick={() =>randomButton(cart)}>Random Choose</button>  
          <button className="clearCart" onClick={clearCart}>Clear Cart</button> 
         </div>

        </div>
    );
};

export default Cart;