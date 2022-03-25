import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>
    fetch('../../public/GoldenData.json')
    .then(res => res.json)
    .then(data => console.log(data))
    ,[])
    
    return (
        <div className="row container">
            <div className="col-md-8 "><h1>Ami</h1>
            
            
            </div>
            <div className="col-md-4"><h1>Tumi</h1></div>
        </div>
    );
};

export default Shop;