import { configureStore, createSlice } from "@reduxjs/toolkit"
import jellyInfoSlice from "./jellyInfo";

let userToken = createSlice({
    name : 'userToken',
    initialState : '',
    reducers : {
        userTokenIn(state,action){
            return state = state + action.payload
        }
    }
});

export let { userTokenIn } = userToken.actions;

export default configureStore({
    reducer : {
        userToken : userToken.reducer,
        jellyInfo : jellyInfoSlice.reducer
    }
})
