import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   bikeForOrder: [],
}

export const orderBikeSlice = createSlice({
    name: 'orderBike',
    initialState,
    reducers: {
        addBikeForOrder: (state, action) => {state.bikeForOrder.push(action.payload)},
        removeBikeFromOrder: (state, action) => {state.bikeForOrder = state.bikeForOrder.filter((bike) => bike.id !== action.payload)},
        clearOrder: (state) => {state.bikeForOrder = []}
    }
})

// Action creators are generated for each case reducer function
export const { addBikeForOrder, removeBikeFromOrder, clearOrder } = orderBikeSlice.actions

export default orderBikeSlice.reducer