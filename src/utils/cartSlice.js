import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "card",
    initialState:{
        items: []
    },
    reducers:{
        //mutating the state
        addItems: (state, actions) =>{
            state.items.push(actions.payload);
        },
        removeItems: (state, actions) =>{
            state.items.pop();
        },
        clearCartItems: (state, actions) =>{
            state.items.length = 0;
        }
    }
})

export const{ addItems, removeItems, clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;