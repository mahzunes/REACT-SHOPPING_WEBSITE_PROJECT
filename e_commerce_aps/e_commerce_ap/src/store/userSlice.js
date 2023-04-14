import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) ?? false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
        },
        setUserLogOutState: state => {
            localStorage.removeItem("user")
            state.user = false
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export const selectUserEmail = state => state.user.userEmail;
export const selectUserPassword = state => state.user.userPassword;


export default userSlice