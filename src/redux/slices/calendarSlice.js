import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dateStart: undefined,
    dateFinish: undefined,
    timeStart: "--:--",
    timeFinish: "--:--",
    isClicked: false,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setTimeStart: (state, action) => { state.timeStart = action.payload },
        setTimeFinish: (state, action) => { state.timeFinish = action.payload },
        setIsClicked: (state) => { state.isClicked = !state.isClicked },
        setDateStart: (state, action) => {state.dateStart = action.payload},
        setDateFinish: (state, action) => {state.dateFinish = action.payload},
    }
})

export const {
    setTimeStart,
    setTimeFinish,
    setIsClicked,
    setDateStart,
    setDateFinish,
} = calendarSlice.actions

export const selectedDateStart = (state) => state.calendar.dateStart;
export const selectedDateFinish = (state) => state.calendar.dateFinish;

export default calendarSlice.reducer