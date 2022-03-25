import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
     const {product}=props
     const {name,img,price,}=product
    return (
        <div className="product-content">
           <div className="product-container">
        <img src={img}alt="" />
           <h1>{name}</h1>
           <p>{price}</p>
          

           </div>
           <button className="add-to-cart ">Add to Cart</button>
        </div>
    );
};

export default Product;