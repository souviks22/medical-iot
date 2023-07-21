import { createSlice } from "@reduxjs/toolkit"

const realtimeSlice = createSlice({
    name: 'realtime',
    initialState: {
        pulse: Array.from({ length: 100 }, () => ({
            x: Date.now(),
            y: 0
        }))
    },
    reducers: {
        addPulse(state) {
            state.pulse.shift()
            const pulse = Math.floor(Math.random() * (180 - 70) + 70)
            state.pulse.push({
                x: Date.now(),
                y: pulse
            })
        }
    }
})

export const realtimeReducer = realtimeSlice.reducer
export const realtimeActions = realtimeSlice.actions