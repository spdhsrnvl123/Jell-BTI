import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userTokenIn } from "redux/store";

export default function KakaoRedirect(){
    const navigate = useNavigate();
    let dispatch = useDispatch()

    useEffect(()=>{
        const url = new URL(window.location.href);     
        console.log(url);       
        const code = url.searchParams.get("code");
        console.log(code)
        axios({
            method: "GET",
            url: `/oauth/login/kakao?code=${code}`,
          })
            .then((res) => {
              console.log(res); // 토큰이 넘어올 것임
              dispatch(userTokenIn(res.data))
              navigate("/mypage")
            }).catch((err) => {
              console.log("소셜로그인 에러", err);
            }) 
    },[])
    
    return <div>Kakao Login Redirect URL Page</div>
}
