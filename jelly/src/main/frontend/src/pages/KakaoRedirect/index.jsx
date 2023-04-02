import axios from "axios";
import { useEffect } from "react";

const KakaoRedirect = ()=>{
    useEffect(()=>{
        const url = new URL(window.location.href);            
        const code = url.searchParams.get("code");
        console.log(code)
        axios({
            method: "GET",
            url: `/oauth/login/kakao?code=${code}`,
          })
            .then((res) => {
              console.log(res); // 토큰이 넘어올 것임
            }).catch((err) => {

              console.log("소셜로그인 에러", err);
              })
    },[])
    return(
        <>
            <h1>카카오 리다이렉트 페이지</h1>
        </>
    )
}

export default KakaoRedirect
