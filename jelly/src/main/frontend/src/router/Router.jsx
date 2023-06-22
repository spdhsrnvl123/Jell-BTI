import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "@/pages/StartPage"
import Home from "@/pages/Home"
import MyPage from "@/pages/MyPage"
import Kakao from "@/pages/Kakao"
import KakaoRedirect from "@/utils/KakaoRedirect"
import Board from "@/pages/Board/Board"
import Writing from "@/pages/Board/Writing"
import Modals from "components/base/Modals"
import Modal from "components/base/Modal"
import Read from "pages/Board/Read"
import Modify from "pages/Board/Modify"
import Question from "pages/Questions/Question"
import Practice from "pages/Questions/Practice"
import Naver from "pages/Naver"
import NaverRedirect from "@/utils/KakaoRedirect"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<Kakao />} />
                <Route path="/oauth/login/kakao" element={<KakaoRedirect />} />
                <Route path="/naverlogin" element={<Naver />} />
                <Route path="oauth2/authorization/naver" element={<NaverRedirect />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/home" element={<Home />}>
                    <Route path="Modal" element={<Modal />} />
                    <Route path="Modals/:id" element={<Modals />} />
                </Route>
                <Route path="/board" element={<Board />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/read" element={<Read />} />
                <Route path="/modify" element={<Modify />} />
                <Route path="/question" element={<Question />} />
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;