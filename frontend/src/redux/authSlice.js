import {createSlice} from "@reduxjs/toolkit";
import {login, refreshToken, register} from "./authActions";

const authSlice = createSlice({
    name: "authorization",
    initialState: {
        isAuth: false,
        token: null,
        isSended: false,
        isLoad: false
    },
    reducers: {
        logout: state => {
            state.token = null
            state.isAuth = false
            localStorage.removeItem("token")
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoad = true
            state.isSended = false
        },
        [login.fulfilled]: (state, {payload}) => {
            state.isLoad = false
            state.isSended = true
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem("token", payload.token)
        },
        [login.rejected]: (state) => {
            state.isLoad = false
        },
        [register.pending]: (state) => {
            state.isLoad = true
            state.isSended = false
        },
        [register.fulfilled]: (state) => {
            state.isLoad = false
            state.isSended = true
        },
        [register.rejected]: state => {
            state.isLoad = false
        },
        [refreshToken.fulfilled]: (state, {payload}) => {
            state.isAuth = true
            state.token = payload.token
            localStorage.setItem("token", payload.token)
        }
    }
})
export const {logout} = authSlice.actions
export const {reducer: authReducer} = authSlice