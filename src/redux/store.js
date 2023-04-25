import { configureStore } from '@reduxjs/toolkit'
import clockReducer from './slices/clockSlice'
import hamburgerReducer from './slices/hamburgerSlice'
import rentTypeReducer from './slices/rentTypeSlice'
import deliveryReducer from './slices/deliverySlice'
import calendarReducer from './slices/calendarSlice'
import bikeReducer from './slices/bikeSlice'
import searchResultsReducer from './slices/searchResultsSlice'
import orderBikeReducer from './slices/orderBikeSlice'
import modalReducer from './slices/modalSlice'
import regFormReducer from './slices/regFormSlice'
import tooltipsReducer from './slices/tooltipsSlice'
import orderReducer from './slices/orderSlice'
import authReducer from './slices/authSlice'
import popupReducer from './slices/popupSlice'

export const store = configureStore({
  reducer: {
    clock: clockReducer,
    hamburger: hamburgerReducer,
    rentType: rentTypeReducer,
    deliveryType: deliveryReducer,
    calendar: calendarReducer,
    bikes: bikeReducer,
    searchResults: searchResultsReducer,
    orderedBikes: orderBikeReducer,
    modal: modalReducer,
    regform: regFormReducer,
    tooltips: tooltipsReducer,
    order: orderReducer,
    auth: authReducer,
    popup: popupReducer,
  }
})