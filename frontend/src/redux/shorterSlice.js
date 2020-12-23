import {createSlice} from "@reduxjs/toolkit";
import {createShortLink, getAllLinks} from "./shorterActions";


const shorterSlice = createSlice({
    name: "shorter",
    initialState: {
        links: [],
        isLoad: false,
        isSended: false
    },
    reducers: {},
    extraReducers: {
        [getAllLinks.fulfilled]: (state, {payload: links = []}) => {
            state.links = links
        },
        [createShortLink.pending]: (state) => {
            state.isSended = false
            state.isLoad = true
        },
        [createShortLink.fulfilled]: (state, {payload: newLink}) => {
            state.isLoad = false
            state.isSended = true
            state.links = [newLink, ...state.links]
        }
    }
})

export const {reducer: shortReducer} = shorterSlice