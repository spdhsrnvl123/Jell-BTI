import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function KakaoLogin(){
    const navigate = useNavigate();

    useEffect(()=>{
        try{
            
            const url = new URL(window.location.href);
            let code = url.herf
            // const code1 = url.searchParams.get("code");
            // console.log(code1)
            if(code){
                axios({
                    url : "/oauth/login/kakao", //설정된 서버 url
                    method : "post",
                    data : code
                }).then((result)=>{
                    // const accessToken = result.data.split("=")[1].split("&")[0];
                    // console.log(accessToken) //Token 값 출력
                    console.log(result)
                })
            }
        }catch(error){
            console.log(error);
        }
    },[])

    return <div>Kakao Login Redirect URL Page</div>
}