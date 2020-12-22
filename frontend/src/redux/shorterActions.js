import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../config/axios";

export const getAllLinks = createAsyncThunk("axiosLinks", async () => {
    const response = await request.get("/api/shorter")
    return response.data
})
export const createShortLink = createAsyncThunk("axiosCreateLink", async (link) => {
    const response = await request.post("/api/shorter", {url: link})
    return response.data
})

export const goToPageByLink = createAsyncThunk("axiosGoToPageByLink", async (shortLink) => {
    await request.get(`/api/shorter/${shortLink}`)
})