import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userWidget: false,
}

export const tooltipsSlice = createSlice({
    name: 'tooltips',
    initialState,
    reducers: {
        setUserWidget: (state, action) => {state.userWidget = action.payload},
    }
})

export const { setUserWidget } = tooltipsSlice.actions;
export const widgetState = (state) => state.tooltips.userWidget;

export default tooltipsSlice.reducer