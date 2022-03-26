import React from 'react';

const Cart = ({cart}) => {
    

// console.log(img);
    return (
        <div>
         <div className="">
         {
                    cart.map((product)=>(
                        <p key={product.id}>{product.name}</p>
                    ))
                }
         </div>
           {/* <h5>{cart}</h5> */}
         <div className="">

         <button>Random Choose</button>  
          <button >Delete</button>  
         </div>

        </div>
    );
};

export default Cart;