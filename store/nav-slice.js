import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        isExpanded: false
    },
    reducers: {
        toggle(state) {
            state.isExpanded = !state.isExpanded
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => ({
            ...state,
            ...action.payload.nav
        })
    }
})

export const navReducer = navSlice.reducer
export const navActions = navSlice.actions