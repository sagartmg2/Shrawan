import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/cart'
import userReducer from './reducer/user'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
})