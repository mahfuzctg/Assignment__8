import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {pic, name,id, date, profile,title,time} = props.cart;
    return (
        <div className='carts'>  
            <img src={pic} alt="" />

            <div className='d-flex'>

            <div className='profile d-flex gap-2 ms-2'>
                <img src={profile} alt="" />
                <div className='d-block'>
          <h6>{name}</h6>
          <p className='data'>{date}</p>
           <p>{time}</p>
          </div>
          
            </div>
          
             <h6>{title}</h6>
             
             </div>
             
         <p>{id}</p>
      
         <div className='cart'>
      
      </div>
        </div>
      
    );
};

export default Cart;