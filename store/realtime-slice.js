import { createSlice } from "@reduxjs/toolkit"

const realtimeSlice = createSlice({
    name: 'realtime',
    initialState: {
        pulse: []
    },
    reducers: {
        addPulse(state) {
            if (state.pulse.length === 10) state.pulse.shift()
            const time = (new Date()).getTime()
            const pulse = Math.floor(Math.random() * (180 - 70) + 70)
            state.pulse.push([time, pulse])
        }
    }
})

export const realtimeReducer = realtimeSlice.reducer
export const realtimeActions = realtimeSlice.actions