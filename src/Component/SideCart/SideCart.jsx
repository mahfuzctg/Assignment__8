import React from 'react';

const SideCart = ({sideCart, timeUpdate}) => {
    return (
        <div className='col-lg-4'>
            <div className='container bg-danger mb-2'>
            <h1>Spend time on read: {sideCart.length}</h1>
               
            </div>
            
            <div className='container col-lg-4'>
            <h1>time updated {timeUpdate}</h1>
             <div className=' bg-danger'>

                {
                    sideCart.map(data => <h1>{data.title}</h1>)
                }
                </div>
            </div>
        </div>
    );
};

export default SideCart;