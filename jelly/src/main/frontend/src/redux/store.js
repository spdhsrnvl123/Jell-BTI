import { configureStore, createSlice } from "@reduxjs/toolkit"

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
        }
    }
});

export let { jellyInfoGet } = jellyInfo.actions
export let { userTokenIn } = userToken.actions

export default configureStore({
    reducer : {
        userToken : userToken.reducer,
        jellyInfo : jellyInfo.reducer
    }
})
