import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { navReducer } from "./nav-slice"

const store = configureStore({
    reducer: {
        nav: navReducer
    }
})

export const wrapper = createWrapper(() => store)