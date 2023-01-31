import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignInIsActive: false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setSignIn: (state, action) => { state.isSignInIsActive = action.payload },
    }
})

export const { setSignIn } = modalSlice.actions

export default modalSlice.reducer