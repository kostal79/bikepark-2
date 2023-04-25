import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popupCancelOrder: false,
    popupBook: false
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupCancelOrder: (state, action) => { state.popupCancelOrder = action.payload },
        setPopupBook: (state, action) => { state.popupBook = action.payload },
    }
})

export const { setPopupCancelOrder, setPopupBook } = popupSlice.actions;
export const getPopupCancelOrder = state => state.popup.popupCancelOrder;
export const getPopupBook = state => state.popup.popupBook;

export default popupSlice.reducer