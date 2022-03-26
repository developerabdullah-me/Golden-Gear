import React, { useState } from 'react';

const Cart = ({cart,Delete}) => {

    const [random,setRandom]=useState({})
   
   const randomButton=(cart)=>{
   let rand = Math.floor(Math.random()*cart.length);
   let rValue = cart[rand];
   setRandom(rValue)
}
  return (
        <div>
           
         <div className="">

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
         <button onClick={() =>randomButton(cart)}>Random Choose</button>  
          <button onClick={Delete}>Delete</button>  
         </div>

        </div>
    );
};

export default Cart;