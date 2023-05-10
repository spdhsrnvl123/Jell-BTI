import { BrowserRouter, Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import StartPage from "../pages/StartPage"
import Home from "../pages/Home"
import MyPage from "../pages/MyPage"
import KakaoRedirect from "../pages/KakaoRedirect"
import KakaoLogin from "../pages/KakaoLoginPage"
import Board from "../pages/Board/Board"
import Write from "../pages/Board/Write"
=======
import StartPage from "@/pages/StartPage"
import Home from "@/pages/Home";
import MyPage from "@/pages/MyPage"
import KakaoRedirect from "@/pages/KakaoRedirect"
import KakaoLogin from "@/pages/KakaoLoginPage"
import Board from "@/pages/Board/Board"
>>>>>>> 0d61c78ca7581715dc8d303f367b7c6edb73d72a

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/oauth/login/kakao" element={<KakaoRedirect />} />
                <Route path="/login" element={<KakaoLogin />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/board" element={<Board />} />
                <Route path="/write" element={<Write />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;