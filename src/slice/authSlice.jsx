import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    jwt : '',
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers:{
        login:(state, data)=>{
            state.isLoggedIn = true
            state.jwt = data.payload
        }
    }
})
export const {login} = authSlice.actions;
export default authSlice.reducer;