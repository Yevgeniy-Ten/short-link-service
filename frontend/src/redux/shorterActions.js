import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../config/axios";

export const getAllLinks = createAsyncThunk("axiosLinks", async (_, {getState}) => {
    const token = getState().auth.token
    const response = await request.get("/api/shorter", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.data
})
export const createShortLink = createAsyncThunk("axiosCreateLink", async (link, {getState}) => {
    const token = getState().auth.token
    const response = await request.post("/api/shorter", {url: link},{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.data
})