import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const HomeCart = () => {
    const [carts, setCart] = useState([]);
    useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setCart(data))
    }, []);

    const HandleCart = (cart) => {
       const newCart = [...carts, cart];
       setCart(newCart);
    }
    return (
        
        <div className='main row py-5'>
           <div className='rightCart col-md-8 col-sm-12'>
                 
                   {
                    carts.map(cart => <Cart key={cart.id} 
                    cart={cart}
                    HandleCart={HandleCart}
                    ></Cart>)
                   }
           </div>
          <div className='SideCart col-md-4 col-sm-12'>
               <Cart cart={carts}></Cart>
          </div>
        </div>
    );
};

export default HomeCart;