import { configureStore, createSlice } from "@reduxjs/toolkit"
import jellyInfoSlice from "./jellyInfo";

//회원정보 데이터 전역 관리
let userInformation = createSlice({
    name : 'userInformation',
    initialState : {},
    reducers : {
        userInformationIn(state,action){
            state += Object.assign(state,action.payload)
        }
    }
});

export let { userInformationIn } = userInformation.actions;

export default configureStore({
    reducer : {
        userInformation : userInformation.reducer,
        jellyInfo : jellyInfoSlice.reducer
    }
})
