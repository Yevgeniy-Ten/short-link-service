import {createSlice} from "@reduxjs/toolkit";


const shorterSlice = createSlice({
    name: "shorter",
    initialState: {
        links: [{
            main: "http:localhost:3000",
            short: "get333",
            id: 1
        }, {
            main: "http:localhost:3000",
            short: "get333",
            id: 2
        },
            {
                main: "http:localhost:3000",
                short: "get333",
                id: 3
            }]
    },
    reducers: {}
})

export const {reducer: shortReducer} = shorterSlice