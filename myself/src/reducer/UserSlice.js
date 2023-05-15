import { createSlice } from "@reduxjs/toolkit"

const userSlicer  = createSlice({
    name : "userId",

    initialState: {
        id : 1,
    },

    reducers: {
        setUserId(state, action) {
            state.id = action.payload
        },
    },
})

export default userSlicer.reducer

export const {setUserId} = userSlicer.actions