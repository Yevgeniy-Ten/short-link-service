import {createSlice} from "@reduxjs/toolkit";
import {createShortLink, getAllLinks} from "./shorterActions";


const shorterSlice = createSlice({
    name: "shorter",
    initialState: {
        links: []
    },
    reducers: {},
    extraReducers: {
        [getAllLinks.fulfilled]: (state, {payload: links = []}) => {
            state.links = links
        },
        [createShortLink.fulfilled]: (state, {payload: newLink}) => {
            state.links = [newLink, ...state.links]
        }
    }
})

export const {reducer: shortReducer} = shorterSlice