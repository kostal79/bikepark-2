import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    userId: "",
    userData: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {state.isAuth = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
        setUserData: (state, action) => {state.userData = action.payload},
    }
})

export const { setIsAuth, setUserId, setUserData } = authSlice.actions;
export const getIsAuth = state => state.auth.isAuth;
export const getUserId = state => state.auth.userId;
export const getUserData = state => state.auth.userData;

export default authSlice.reducer