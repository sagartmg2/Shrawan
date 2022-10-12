import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from './App';
import { setCartStore } from './redux/reducer/cart';
const Cart = () => {
    const user_context = useContext(UserContext);
    const cart_store = useSelector((state) => state.cart.value)

    const dispatch = useDispatch();
    console.log("render-cart");
    return (
        <div>
            <h1>Cart</h1>
            cart context:
            {
                JSON.stringify(user_context.cart)
            }
            <hr />
            cart store:

            {
                JSON.stringify(cart_store)
            }
            <button onClick={() => dispatch(setCartStore())}>change cart redux store</button>
            <button onClick={() => user_context.setCart([{ id: 1, name: "one" }])}>change cart item</button>

        </div>
    );
}

export default Cart;
