import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bikeTypes: [],
    bikeMarks: [],
    bikeSizes: [],
}

export const bikeSlice = createSlice({
    name: "bikes",
    initialState,
    reducers: {
        setBikesTypes: (state, action) => { state.bikeTypes.push(action.payload) },
        setBikesMarks: (state, action) => { state.bikeMarks.push(action.payload) },
        setBikesSizes: (state, action) => { state.bikeSizes.push(action.payload) },
        removeBikeTypes: (state, action) => {
            state.bikeTypes = state.bikeTypes.filter(item => item !== action.payload)
        },
        removeBikeMark: (state, action) => {
            state.bikeSizes = state.bikeMarks.filter(item => item !== action.payload)
        },
        removeBikeSize: (state, action) => {
            state.bikeSizes = state.bikeSizes.filter(item => item !== action.payload)
        }
    }
})

export const { setBikesTypes,
    setBikesMarks,
    setBikesSizes,
    removeBikeTypes,
    removeBikeMark,
    removeBikeSize
} = bikeSlice.actions;

export const bikesTypes = state => state.bikes.bikeTypes;
export default bikeSlice.reducer