import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handelToCart}= props;
    console.log(props);
     const {product}=props
     const {name,img,price,}=product
    return (
        <div className="product-content">
           <div className="product-container">
        <img src={img}alt="" />
           <h1>{name}</h1>
           <p>{price}</p>
           <button onClick={()=>handelToCart(props.product)} className=".add-to-cart">Add to cart  </button>

           </div>
             
        </div>
    );
};

export default Product;