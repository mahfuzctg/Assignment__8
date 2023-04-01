import React from 'react';

const SideCart = ({sideCart}) => {
    let total = '';
  for (const cart of sideCart){
    total = total + cart.title;
  }
    return (
        <div>
            <h3>booking: {sideCart.length}</h3>
            <div className='cart bg-success'>
                <h6>{total}</h6>
            </div>
        </div>
    );
};

export default SideCart;