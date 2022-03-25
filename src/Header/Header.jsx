import React from 'react';
import Shop from '../Shop/Shop';
import './Header.css'
const Header = () => {
    return (
        <div className="">
<nav class="navbar navbar-expand-lg navbar-light header-container">
  <div class="container">
    <a class="navbar-brand text-white" href="/">Golden Gear</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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