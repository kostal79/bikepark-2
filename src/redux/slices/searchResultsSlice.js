import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    resultList: []
}

export const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState,
    reducers: {
        setResultList: (state, action) => {state.resultList = action.payload}
    }
})

export const { setResultList } = searchResultsSlice.actions;
export default searchResultsSlice.reducer
export const getResultList = state => state.searchResults.resultList;