import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const testSlice = createSlice({
    name: 'test',
    initialState: {
        isHome: true
    },
    reducers: {
        goThere(state) {
            state.isHome = false
        },
        goHome(state) {
            state.isHome = true
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => ({
            ...state,
            ...action.payload.test
        })
    }
})

export const testReducer = testSlice.reducer
export const testActions = testSlice.actions