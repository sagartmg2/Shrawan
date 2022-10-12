import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("logged_in")) || false,
    // logged_status : true,
    // user:{}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state) => {
            localStorage.setItem("logged_in", true)
            state.value = true
        },
        logoout: (state) => {
            localStorage.setItem("logged_in", false)
            state.value = false
        },

        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { login,logout } = authSlice.actions

export default authSlice.reducer