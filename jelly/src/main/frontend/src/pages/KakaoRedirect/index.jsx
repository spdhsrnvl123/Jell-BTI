import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function KakaoRedirect(){
    const navigate = useNavigate();
    
    useEffect(()=>{
        const url = new URL(window.location.href);            
        const code = url.searchParams.get("code");
        console.log(code)
        axios({
            method: "POST",
            url: `/oauth/login/kakao?code=${code}`,
          })
            .then((res) => {
              console.log(res); // 토큰이 넘어올 것임

            }).catch((err) => {

              console.log("소셜로그인 에러", err);
              })
    },[])

    return <div>Kakao Login Redirect URL Page</div>
}
