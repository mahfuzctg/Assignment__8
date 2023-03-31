import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
        <nav className='header col-md-12'>
        <div><h3>Programming Boss</h3></div>
        {/* <div className='item'>
        <a href="/Shop">Shop</a>
        <a href="/Order">Order</a>
        <a href="/Login">Login</a>
        <a href="/Inventory">Inventory</a>
        </div> */}
        <img src="https://i.postimg.cc/vHWLbGnN/Whats-App-Image-2023-03-22-at-7-47-32-PM.jpg" alt="" />
    </nav>
        </div>
    );
};

export default Header;