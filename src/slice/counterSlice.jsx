import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment: (state)=> {
            state.count += 1; 
        },
        decrement: (state)=> {
            state.count -= 1; 
        },
        reset: (state)=> {
            state.count = 0; 
        },
        incrementByValue: (state, data)=> {
            state.count = state.count + Number(data.payload)
        },
    },
});

export const {increment, decrement, reset, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;