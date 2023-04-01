import React from 'react';
import './SideCart.css';
const SideCart = ({sideCart, timeUpdate}) => {
    return (
        <div className='side-cart container'>
            <div>
            <h6 className='bg-light p-4'>Spend time on read:{timeUpdate}</h6>
               
            </div>
            
            <div>
            <h6>Bookmarked blogs: {sideCart.length}</h6>
          

                {
                    sideCart.map(data =><h6 className='bg-light p-4'>{data.title}</h6>)
                }
            </div>
        </div>
    );
};

export default SideCart;