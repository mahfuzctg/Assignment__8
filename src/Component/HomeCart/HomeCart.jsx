import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';

const HomeCart = () => {
    const [carts, setCart] = useState([]);
    const [sideCart, setsideCart] = useState([]);
    useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setCart(data))
    }, []);

    const HandleCart = (cart) => {
       const newCart = [...sideCart, cart];
       setsideCart(newCart);
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
                <SideCart sideCart={sideCart}></SideCart>
          </div>
        </div>
    );
};

export default HomeCart;