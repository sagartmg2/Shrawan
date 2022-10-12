import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {}
    // logged_status : true,
    // user:{}
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserStore: (state) => {
            state.value = { id: 1, name: "user from database" }
        },
        // logoout: (state) => {
        //     localStorage.setItem("logged_in", false)
        //     state.value = false
        // },

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
export const { setUserStore } = userSlice.actions

export default userSlice.reducer