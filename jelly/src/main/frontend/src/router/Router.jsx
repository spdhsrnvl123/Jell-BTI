import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "../pages/StartPage"
import Home from "../pages/Home"
import TestPage from "../pages/TestPage"
import ProfilePage from "../pages/ProfilePage"
import KakaoRedirect from "../pages/KakaoRedirect"
import KakaoLogin from "../pages/KakaoLoginPage"
import DetailPage from "../pages/DetailPage"

const RouterInfo = [
    {
        path : '/',
        element : <StartPage />,
        withAuthorization : true,
        label : '시작 페이지'
    },
    {
        path : '/home',
        element : <Home />,
        withAuthorization : true,
        label : '홈 페이지',
    },
    {
        path : '/test',
        element : <TestPage />,
        withAuthorization : true,
        label : '테스트 페이지'
    },
    {
        path : '/profile',
        element : <ProfilePage />,
        withAuthorization : true,
        label : '프로필 페이지'
    },
    {
        path : '/detail',
        element : <DetailPage />,
        withAuthorization : true,
        label : '디테일 페이지'
    },
    {
        path : '/login',
        element : <KakaoLogin />,
        withAuthorization : true,
        label : '카카오 로그인'
    },
    {
        path : '/oauth/login/kakao',
        element : <KakaoRedirect />,
        withAuthorization : true,
        label : '카카오 리다이렉트'
    }
]

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                {
                    RouterInfo.map((routerInfo)=>{
                        return(
                            <Route key={routerInfo.label} path={routerInfo.path} element={routerInfo.element} />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}


export default Router;