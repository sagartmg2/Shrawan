import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/auth'
import cartReducer from './reducer/cart'
import userReducer from './reducer/user'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        user: userReducer,
    },
})