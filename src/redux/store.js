import { configureStore } from '@reduxjs/toolkit'
import clockReducer from './slices/clockSlice'
import hamburgerReducer from './slices/hamburgerSlice'
import rentTypeReducer from './slices/rentTypeSlice'
import deliverySlice from './slices/deliverySlice'
import calendarSlice from './slices/calendarSlice'
import bikeSlice from './slices/bikeSlice'
import searchResultsSlice from './slices/searchResultsSlice'
import orderBikeSlice from './slices/orderBikeSlice'
import modalSlice from './slices/modalSlice'
import regFormSlice from './slices/regFormSlice'
import tooltipsSlice from './slices/tooltipsSlice'
import orderSlice from './slices/orderSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({
  reducer: {
    clock: clockReducer,
    hamburger: hamburgerReducer,
    rentType: rentTypeReducer,
    deliveryType: deliverySlice,
    calendar: calendarSlice,
    bikes: bikeSlice,
    searchResults: searchResultsSlice,
    orderedBikes: orderBikeSlice,
    modal: modalSlice,
    regform: regFormSlice,
    tooltips: tooltipsSlice,
    order: orderSlice,
    auth: authSlice,
  },
})