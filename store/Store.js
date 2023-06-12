import {configureStore} from "@reduxjs/toolkit"
import globalReducer from "./Reducer"


export const store = configureStore({
    reducer: {
        globalReducer,
    }
})