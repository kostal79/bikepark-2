import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderState: {}
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => { state.orderState = action.payload },
    }
})

export const {
    setOrder,
} = orderSlice.actions

export const orderState = (state) => state.order.orderState;

export default orderSlice.reducer