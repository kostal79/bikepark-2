import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    order: {
        dateStart: "",
        dateFinish: "",
        timeStart: "",
        timeFinish: "",
        bikes: [],
        userId: "",
        name: "",
        phone: "",
        addres: "",
        "payment-type": "",
        status: "в работе",
        paid: false,
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => { state.order = action.payload },
    }
})

export const {
    setOrder,
} = orderSlice.actions

export const orderState = (state) => state.order.order;

export default orderSlice.reducer