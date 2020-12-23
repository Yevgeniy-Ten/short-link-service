import {configureStore} from "@reduxjs/toolkit";
import {shortReducer} from "./shorterSlice";
import {authReducer} from "./authSlice"

export default configureStore({
    reducer: {
        shorter: shortReducer,
        auth: authReducer
    },
});
