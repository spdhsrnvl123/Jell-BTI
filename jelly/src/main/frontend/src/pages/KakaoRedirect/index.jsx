import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userTokenIn } from "../../redux/store";

const KakaoRedirect = ()=>{
    const navigate = useNavigate();
    const userTokenBox = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(()=>{
        const url = new URL(window.location.href);            
        const code = url.searchParams.get("code");

        console.log(code)
        axios({
            method: "GET",
            url: `/oauth/login/kakao?code=${code}`,
          })
            .then((res) => {
              console.log(res)
              console.log(res.data);
              dispatch(userTokenIn(res.data))

              navigate('/mypage')
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
