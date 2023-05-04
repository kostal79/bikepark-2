import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popupCancelOrder: false,
    popupBook: false,
    popupCancelResult: false,
    popupFeedback: false,
    popupCard: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupCancelOrder: (state, action) => { state.popupCancelOrder = action.payload },
        setPopupBook: (state, action) => { state.popupBook = action.payload },
        setPopupCancelResult: (state, action) => { state.popupCancelResult = action.payload },
        setPopupFeedback: (state, action) => { state.popupFeedback = action.payload },
        setPopupCard: (state, action) => { state.popupCard = action.payload },
    }
})

export const {
    setPopupCancelOrder,
    setPopupBook,
    setPopupCancelResult,
    setPopupFeedback,
    setPopupCard
} = popupSlice.actions;
export const getPopupCancelOrder = state => state.popup.popupCancelOrder;
export const getPopupBook = state => state.popup.popupBook;
export const getPopupCancelResult = state => state.popup.popupCancelResult;
export const getPopupFeedback = state => state.popup.popupFeedback;
export const getPopupCard= state => state.popup.popupCard;

export default popupSlice.reducer