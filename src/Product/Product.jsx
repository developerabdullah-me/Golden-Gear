import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Product = ({product,handelToCart}) => {
     const {name,img,price,}=product;
    return (
        <div className="product-content">
           <div className="product-container">
        <img src={img}alt="" />
           <p>{name}</p>
           <p>{price}</p>
           <button onClick={()=>handelToCart(product)} className="add-to-cart">Add to cart  <BsFillCartPlusFill/></button>

           </div>
             
        </div>
    );
};

export default Product;