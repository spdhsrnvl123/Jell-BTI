import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "@/pages/StartPage"
import Home from "@/pages/Home"
import MyPage from "@/pages/MyPage"
import KakaoRedirect from "@/pages/KakaoRedirect"
import KakaoLogin from "@/pages/KakaoLoginPage"
import Board from "@/pages/Board/Board"
import Writing from "@/pages/Board/Writing"
import Modals from "components/base/Modals"
import Modal from "components/base/Modal"
import Read from "pages/Board/Read"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/oauth/login/kakao" element={<KakaoRedirect />} />
                <Route path="/login" element={<KakaoLogin />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/home" element={<Home />}>
                <Route path="modals/:id" element={<Modals />} />
                <Route path="Modal" element={<Modal />} />
                </Route>
                <Route path="/board" element={<Board />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/read" element={<Read />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;