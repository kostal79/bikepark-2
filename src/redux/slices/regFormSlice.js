import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeWindow: "signin",
}

export const regFormSlice = createSlice({
    name: "regform",
    initialState,
    reducers: {
        setActiveWindow: (state, action) => { state.activeWindow = action.payload },
    }
})

export const { setActiveWindow } = regFormSlice.actions

export default regFormSlice.reducer