import { createSlice } from "@reduxjs/toolkit";


const updateSlice = createSlice({
    name: "update",
    initialState: {
        updateList: [],

    },
    reducers: {
        updateUser(state, action) {
            state.updateList.push({
                
                email: action.payload,
                password: action.payload
            })


        }
    }

})

export const updateActions = updateSlice.actions;
export default updateSlice;