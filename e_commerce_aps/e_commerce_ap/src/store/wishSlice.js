import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        itemsList: [],

    },
    reducers: {
        addToWish(state, action) {
            const newItem = action.payload

            //check item
            const exitsItem = state.itemsList.find((item) => item.id === newItem.id)

            if (exitsItem) {
                exitsItem.quantity++
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.cover,
                })
            }



        },
        removeFromCart(state, action) {
            const id = action.payload
            const exitstingItem = state.itemsList.find((item) => item.id === id);
            if (exitstingItem) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)

            }

        }

    }
})

export const wishActions = wishSlice.actions
export default wishSlice