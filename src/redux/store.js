import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import clockReducer from './slices/clockSlice'
import hamburgerReducer from './slices/hamburgerSlice'
import rentTypeReducer from './slices/rentTypeSlice'
import deliverySlice from './slices/deliverySlice'
import calendarSlice from './slices/calendarSlice'
import bikeSlice from './slices/bikeSlice'
import searchResultsSlice from './slices/searchResultsSlice'
import orderBikeSlice from './slices/orderBikeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    hamburger: hamburgerReducer,
    rentType: rentTypeReducer,
    deliveryType: deliverySlice,
    calendar: calendarSlice,
    bikes: bikeSlice,
    searchResults: searchResultsSlice,
    orderedBikes: orderBikeSlice,
  },
})