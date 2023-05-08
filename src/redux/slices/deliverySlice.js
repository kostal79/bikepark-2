import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: "самовывоз",
}

export const deliverySlice = createSlice({
    name: 'deliveryType',
    initialState,
    reducers: {
        setDelivery: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setDelivery } = deliverySlice.actions;
export const deliveryState = state => state.deliveryType.value

export default deliverySlice.reducer