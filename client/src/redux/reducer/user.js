import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // logged_status: JSON.parse(localStorage.getItem("logged_in")) || false,
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserStore: (state,action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserStore} = userSlice.actions

export default userSlice.reducer