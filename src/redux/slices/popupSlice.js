import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popupSignIn: false,
    popupCancelOrder: false,
    popupBook: false,
    popupCancelResult: false,
    popupFeedback: false,
    popupCard: false,
    popupCalendar: false,
    popupReauthenticateUser: true,
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupSignIn: (state, action) => {state.popupSignIn = action.payload},
        setPopupCancelOrder: (state, action) => { state.popupCancelOrder = action.payload },
        setPopupBook: (state, action) => { state.popupBook = action.payload },
        setPopupCancelResult: (state, action) => { state.popupCancelResult = action.payload },
        setPopupFeedback: (state, action) => { state.popupFeedback = action.payload },
        setPopupCard: (state, action) => { state.popupCard = action.payload },
        setPopupCalendar: (state, action) => { state.popupCalendar = action.payload },
        setPopupReauthenticateUser: (state, action) => { state.popupReauthenticateUser = action.payload },
    }
})

export const {
    setPopupSignIn,
    setPopupCancelOrder,
    setPopupBook,
    setPopupCancelResult,
    setPopupFeedback,
    setPopupCard,
    setPopupCalendar,
    setPopupReauthenticateUser,
} = popupSlice.actions;

export const getPopupSignIn = state => state.popup.popupSignIn;
export const getPopupCancelOrder = state => state.popup.popupCancelOrder;
export const getPopupBook = state => state.popup.popupBook;
export const getPopupCancelResult = state => state.popup.popupCancelResult;
export const getPopupFeedback = state => state.popup.popupFeedback;
export const getPopupCard = state => state.popup.popupCard;
export const getPopupCalendar = state => state.popup.popupCalendar;
export const getPopupReauthenticateUser = state => state.popup.popupReauthenticateUser;

export default popupSlice.reducer