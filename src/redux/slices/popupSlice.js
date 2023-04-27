import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popupCancelOrder: false,
    popupBook: false,
    popupCancelResult: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupCancelOrder: (state, action) => { state.popupCancelOrder = action.payload },
        setPopupBook: (state, action) => { state.popupBook = action.payload },
        setPopupCancelResult: (state, action) => { state.popupCancelResult = action.payload },
    }
})

export const { setPopupCancelOrder, setPopupBook, setPopupCancelResult } = popupSlice.actions;
export const getPopupCancelOrder = state => state.popup.popupCancelOrder;
export const getPopupBook = state => state.popup.popupBook;
export const getPopupCancelResult = state => state.popup.popupCancelResult;

export default popupSlice.reducer