import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {pic, name,id,read, date, profile,title,time} = props.cart;
      const HandleCart = props.HandleCart;
      const timeUpdated = props.timeUpdated
      

    return (
        <div className='carts'>  
            <img src={pic} alt="" />
                
                <div className='d-flex justify-content-between px-2'>
                <div className='d-flex'> 

                <div className='profile d-flex mx-2'>
                 <img src={profile} alt="" />
                   </div>
                      <div>
                      <h6>{name}</h6>
                      <p className='data'>{date}</p>
                      </div>
                </div>
                <div className='d-flex ms-5 align-items-center'>
                 <p>{time} min read</p>
                <button onClick={()=> HandleCart(props.cart)} className='btn '><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
                
                </div>
                <div className='container p-4'>
                   <h6> {title}</h6>
                   <p>#learner #coder</p>
                  
                  <button onClick={() => timeUpdated(time)}>read{read}</button>
                </div>
                  
        </div>
    );
};

export default Cart;