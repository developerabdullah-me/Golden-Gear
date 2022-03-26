import React, { useState } from 'react';

const Cart = ({cart}) => {
    const [random,setRandom]=useState({})
const randomButton=(cart)=>{
    console.log(cart);
    // var  = [cart];
   var rand = Math.floor(Math.random()*cart.length);
  
//    console.log(rand);
var rValue = cart[rand];
setRandom(rValue)
}
// console.log(img);
    return (
        <div>
           
         <div className="">

         {
                    cart.map((product)=>(
                        <div className="d-flex align-items-center">
                            <p key={product.id}> {product.name}</p>
                            <img className="w-50" src={product.img} alt="" />
                        </div>
                        
                        // <div key={product.id}>
                        //     <img src={product.img} alt="" />
                        //     {product.name}
                            
                        //     </div>
                    ))
                }
         </div>
           {/* <h5>{cart}</h5> */}
         <div className="">
         <div className="">
               <img src={random.img} alt="" />
                </div>
         <button onClick={() =>randomButton(cart)}>Random Choose</button>  
          <button>Delete</button>  
         </div>

        </div>
    );
};

export default Cart;