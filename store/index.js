import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { testReducer } from "./test-slice"

const store = configureStore({
    reducer: {
        test: testReducer
    }
})

export const wrapper = createWrapper(() => store)