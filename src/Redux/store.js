import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { middleware } from "yargs";
import { destinationApi } from "../api/destinationApi";

export const store = configureStore({
    reducer:{
        [destinationApi.reducerPath]: destinationApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(destinationApi.middleware)
})