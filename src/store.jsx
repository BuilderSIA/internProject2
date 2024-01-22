import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./features/logSlice";

export const store = configureStore({
    reducer:{
        login:logSlice
    }
})