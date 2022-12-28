import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

export const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        setIsActive: (state, action) => {state.isActive = action.payload},
    }
})

// Action creators are generated for each case reducer function
export const { setIsActive } = hamburgerSlice.actions

export default hamburgerSlice.reducer