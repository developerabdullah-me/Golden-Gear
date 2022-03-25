import React from 'react';

const Cart = ({cart,img}) => {
    

console.log(Cart);
    return (
        <div>
            <img src={img} alt="" />
           <h5>{cart}</h5>
        
        </div>
    );
};

export default Cart;