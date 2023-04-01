import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeCart = () => {
    const [carts, setCart] = useState([]);
    const [sideCart, setsideCart] = useState([]);
    const [timeUpdate, setTimeUpdate ] = useState(0)
   
    useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setCart(data))
    }, []);
    const timeUpdated = (time)=>{
        const newTimeUpdate = timeUpdate + parseInt(time)
        setTimeUpdate(newTimeUpdate)
      }
   
    const HandleCart = (cart) => {
        const getCart = sideCart.find(cart => cart.id === cart.id);
        if(getCart){
            const notify =  toast("Ops! in already added !");
            return notify;
        }
        const newData = [...sideCart, cart]
        setsideCart(newData )

    }
    return (
        
        <div className='main row py-5'>
           <div className='container rightCart col-md-8 col-sm-12'>
                 
                   {
                    carts.map(cart => <Cart key={cart.id} 
                    cart={cart}
                    HandleCart={HandleCart}
                    timeUpdated = {timeUpdated}
                
                    ></Cart>)
                   }
           </div>
          <div className='p-2'>
              
                <SideCart timeUpdate = {timeUpdate} sideCart={sideCart}></SideCart>
                <ToastContainer/>
          </div>
        </div>
    );
};

export default HomeCart;