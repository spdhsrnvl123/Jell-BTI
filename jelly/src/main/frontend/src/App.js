// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import KakaoLogin from './components/Kakao';

function App() {
//    const [hello, setHello] = useState('')

//     useEffect(() => {
//         axios.get('/hello')
//         .then(response => setHello(response.data))
//         .catch(error => console.log(error))
//     }, []);

    return (
        <div className="App">
            {/* 백엔드에서 가져온 데이터입니다 : {hello} */}
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
