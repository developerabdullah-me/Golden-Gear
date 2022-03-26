import React from 'react';

const Cart = ({cart}) => {
    

// console.log(img);
    return (
        <div>
         <div className="">
         {
                    cart.map((product)=>(
                        <div className="d-flex">
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

         <button>Random Choose</button>  
          <button >Delete</button>  
         </div>

        </div>
    );
};

export default Cart;