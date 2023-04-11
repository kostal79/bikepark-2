import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    userId: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {state.isAuth = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
    }
})

export const { setIsAuth, setUserId } = authSlice.actions;
export const getIsAuth = state => state.auth.isAuth;
export const getUserId = state => state.auth.userId;

export default authSlice.reducer