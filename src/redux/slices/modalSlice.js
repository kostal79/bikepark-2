import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignInActive: false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setSignIn: (state, action) => { state.isSignInActive = action.payload },
    }
})

export const { setSignIn } = modalSlice.actions;
export const getIsSignActive = state => state.modal.isSignInActive;

export default modalSlice.reducer