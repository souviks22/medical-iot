import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { navReducer } from "./nav-slice"
import { realtimeReducer } from "./realtime-slice"

const store = configureStore({
    reducer: {
        nav: navReducer,
        realtime: realtimeReducer
    }
})

export const wrapper = createWrapper(() => store)