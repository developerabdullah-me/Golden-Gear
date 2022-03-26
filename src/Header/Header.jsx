import React from 'react';
import Shop from '../Shop/Shop';
import './Header.css'
const Header = () => {
    return (
        <div className="">
<nav className="navbar navbar-expand-lg  header-container">
  <div className="container">
    <a className="navbar-brand text-white" href="/Golden Gear">Golden Gear</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <div className="header-menu">
               <a href="/Home">Home</a>
               <a href="/Home">About</a>
               <a href="/Home">Contact</a>
               <a href="/Home">About</a>
               </div>
      </ul>
      
    </div>
  </div>
</nav>
<Shop></Shop>
        </div>
    );
};

export default Header;