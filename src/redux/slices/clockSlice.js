import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    date: (new Date()).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
}

export const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        setTime: (state, action) => {state.date = action.payload},
    }
})

// Action creators are generated for each case reducer function
export const { setTime } = clockSlice.actions

export default clockSlice.reducer