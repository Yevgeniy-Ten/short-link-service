import {configureStore} from "@reduxjs/toolkit";
import {shortReducer} from "./shorterSlice";

export default configureStore({
    reducer: {
        shorter: shortReducer
    },
});
