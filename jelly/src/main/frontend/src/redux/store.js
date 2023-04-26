import { configureStore, createSlice } from "@reduxjs/toolkit"
import counterSlice from "./countSlice";

let userToken = createSlice({
    name : 'userToken',
    initialState : '',
    reducers : {
        userTokenIn(state,action){
            return state = state + action.payload
        }
    }
});

let jellyInfo = createSlice({
    name : 'jellyInfo',
    initialState : [],
    reducers : {
        jellyInfoGet(state,action){
            console.log(action.payload)
            state = state.push(...action.payload)
        },
        jellyInfoReset(state, action){
            state = action.payload
        }
    }
});

export let { jellyInfoGet, jellyInfoReset } = jellyInfo.actions
export let { userTokenIn } = userToken.actions

export default configureStore({
    reducer : {
        userToken : userToken.reducer,
        jellyInfo : jellyInfo.reducer,
        counter:counterSlice.reducer
    }
})
