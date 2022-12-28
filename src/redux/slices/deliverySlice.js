import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: "0",
   text: "Самовывоз"
}

export const deliverySlice = createSlice({
    name: 'deliveryType',
    initialState,
    reducers: {
        setDelivery: (state, action) => {
            state.value = action.payload.value;
            state.text = action.payload.text;
        },
    }
})

// Action creators are generated for each case reducer function
export const { setDelivery } = deliverySlice.actions

export default deliverySlice.reducer