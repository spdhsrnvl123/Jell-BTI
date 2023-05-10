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

let modalAppear = createSlice({
    name : 'modalAppear',
    initialState : false,
    reducers : {
        modalChange(state){
            return !state
        }
    }
})

export let { modalChange } = modalAppear.actions;

export default configureStore({
    reducer : {
        userToken : userToken.reducer,
        modalAppear : modalAppear.reducer,
        jellyInfo : jellyInfoSlice.reducer
    }
})
