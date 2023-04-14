import { configureStore } from "@reduxjs/toolkit"

import cartSlice from "./cartSlice"
import userSlice from "./userSlice";
import updateSlice from "./updateSlice";
import wishSlice from "./wishSlice";
const store = configureStore({
    reducer: {

        cart: cartSlice.reducer,
        user: userSlice.reducer,
        update: updateSlice.reducer,
        wish: wishSlice.reducer,


    },
})

export default store