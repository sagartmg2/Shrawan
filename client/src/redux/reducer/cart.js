import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [

        // {
        //     _id: 1123,
        //     quantity: 0,
        // },
        // {

        // }

    ]
    // logged_status : true,
    // user:{}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartStore: (state) => {
            state.value = [{ id: 1, name: "store value changed..." }]
        },

        addToCart: (state, action) => {
            let cart_items = state.value;

            // if product already exists, update quantity else add to cart_items

            let status = cart_items.find(el => el._id == action.payload._id);   // { _id}

            if (status) {
                cart_items.map(item => {
                    let obj = {}
                    if (item._id == action.payload._id) {
                        obj = item;
                        obj.quantity = obj.quantity + 1
                    }
                })
            } else {
                cart_items.push({ ...action.payload, quantity: 1 })
            }
            state.value = cart_items

        }
    },
})

// Action creators are generated for each case reducer function
export const { setCartStore, addToCart } = cartSlice.actions

export default cartSlice.reducer