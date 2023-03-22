import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: "Самовывоз",
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

export default deliverySlice.reducer