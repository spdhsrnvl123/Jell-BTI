// src/main/frontend/src/App.js
import React from 'react';
import axios from 'axios';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import KakaoLogin from './components/Kakao';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/oauth/login/kakao" element={<KakaoLogin />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
