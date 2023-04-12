import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "../pages/StartPage"
import Home from "../pages/Home"
import MyPage from "../pages/MyPage"
import KakaoRedirect from "../pages/KakaoRedirect"
import KakaoLogin from "../pages/KakaoLoginPage"
import DetailPage from "../pages/DetailPage"
import Board from "../pages/Board/Board"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/oauth/login/kakao" element={<KakaoRedirect />} />
                <Route path="/login" element={<KakaoLogin />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;