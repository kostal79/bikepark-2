import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   type: 'days',
}

export const rentTypeSlice = createSlice({
    name: 'rentType',
    initialState,
    reducers: {
        setType: (state, action) => {state.type = action.payload},
    }
})

// Action creators are generated for each case reducer function
export const { setType } = rentTypeSlice.actions
export const getRentType = state => state.rentType.type;

export default rentTypeSlice.reducer