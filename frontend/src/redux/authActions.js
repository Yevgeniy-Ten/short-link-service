import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../config/axios";
import {showToaster} from "../assets/assets";

export const login = createAsyncThunk("axiosLogin", async (data) => {
    try {
        const response = await request.post("/api/auth/login", data)
        return response.data
    } catch (e) {
        showToaster(e.response.data.msg, "warning")
        throw e
    }
})
export const register = createAsyncThunk("axiosRegister", async (data) => {
    try {
        const response = await request.post("/api/auth/register", data)
        showToaster(response.data.msg, "success")
    } catch (e) {
        showToaster(e.response.data.msg, "warning")
        throw e
    }
})
export const refreshToken = createAsyncThunk("axiosValidateToken", async () => {
    const localToken = localStorage.getItem("token")
    if (!localToken) {
        return
    }
    const response = await request.get("api/auth/refresh", {
        headers: {
            "Authorization": `Bearer ${localToken}`
        }
    })
    return response.data
})