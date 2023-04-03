import { configureStore, createSlice } from "@reduxjs/toolkit"

let userToken = createSlice({
    name : 'userToken',
    initialState : '',
    reducers : {
        userTokenIn(state,action){
            return state = state + action.payload
        }
    }
})

export let {userTokenIn} = userToken.actions

export default configureStore({
    reducer : {
        userToken : userToken.reducer
    }
})

