// src/main/frontend/src/App.js
import React, { useEffect } from 'react';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import axios from 'axios';

function App() {
    // useEffect(()=>{
    //     axios({
    //         method: "get",
    //         url: "/hello",
    //     }).then((response)=>{
    //         console.log(response)
    //     });
    // },[])

    // useEffect(()=>{
    //     axios({
    //       url: '/jellies/rates',
    //       method: 'post',
    //       data : {
    //         "jIdx": 4642,
    //         "mNick": "jelly",
    //         "mJelly": "3331",
    //         "jStar": 4,
    //         "rContent": "제 타입의 젤리네요",
    //         "mEmail": "magicofclown@naver.com"
    //       }
    //   }).then((response) => {
    //     console.log(response)
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // },[])
    
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
