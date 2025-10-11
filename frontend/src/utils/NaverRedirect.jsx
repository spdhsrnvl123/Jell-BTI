import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function NaverRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        const url = new URL(window.location.href);
        console.log(url);
        const code = url.searchParams.get("code");
        console.log(code);
        axios({
            method: "GET",
            url: `/oauth2/authorization/naver?code=${code}`,
        })
            .then((res) => {
                console.log(res); // 토큰이 넘어올 것임
                navigate("/mypage")
            }).catch((err) => {
                console.log("소셜로그인 에러", err);
            })
    }, [])

    return <div>Naver Login Redirect URL Page</div>
}