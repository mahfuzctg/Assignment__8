import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const HomeCart = () => {
    const [carts, setCart] = useState([]);
    useEffect(() => {
         fetch('fakeData.json')
         .then(res => res.json())
         .then(data => setCart(data))
    }, []);
    return (
        
        <div className='main row py-5'>
           <div className='rightCart col-md-8 col-sm-12'>
                 
                   {
                    carts.map(cart => <Cart key={cart.id} 
                    cart={cart}
                    ></Cart>)
                   }
           </div>
          <div className='SideCart col-md-4 col-sm-12'>
                 Bookmark
          </div>
        </div>
    );
};

export default HomeCart;