import React from 'react';
import Cart from './Cart';
import User from './User';

const Home = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{
                    width:"50%"
                }}>
                    <Cart/>
                </div>
                <div style={{
                    width:"50%"
                }}>
                    <User/>
                </div>
            
        </div>
    );
}

export default Home;
