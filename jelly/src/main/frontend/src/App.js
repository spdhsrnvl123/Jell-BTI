// src/main/frontend/src/App.js
import React, { useEffect } from 'react';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import axios from 'axios';

function App() {
    useEffect(()=>{
        axios({
            method: "get",
            url: "/hello",
        }).then((response)=>{
            console.log(response)
        });
    },[])
    
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
