import React from 'react';
import "./SideCart.css"
const SideCart = (props) => {
const cart = props.cart;
    return (
        <div>
             <h3>booking: {cart.length}</h3>
        </div>
    );
};

export default SideCart;