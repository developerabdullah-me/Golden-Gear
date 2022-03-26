import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Product = ({product,handelToCart}) => {
     const {name,img,price,}=product;
    return (
        <div className="product-content">
           <div className="product-container">
        <img src={img}alt="" />
          <div className="px-5">
          <p>Name:$ <small> {name}</small></p>
           <p>Price:$ <small> {price}</small></p>
          </div>
           <button onClick={()=>handelToCart(product)} className="add-to-cart">Add to cart  <BsFillCartPlusFill/></button>

           </div>
             
        </div>
    );
};

export default Product;