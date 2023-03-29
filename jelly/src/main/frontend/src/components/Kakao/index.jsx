import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function KakaoLogin(){
    const navigate = useNavigate();

    useEffect(()=>{
        try{
            const url = new URL(window.location.href);
            const code = url.searchParams.get("code");
            console.log(code);
            if(code){
                axios({
                    url : "url", //설정된 서버 url
                    method : "post",
                    data : {
                        code : code,
                    }
                }).then((result)=>{
                    const accessToken = result.data.split("=")[1].split("&")[0];
                    console.log(accessToken) //Token 값 출력
                })
            }
        }catch(error){
            console.log(error)
        }
    },[])

    return <div>Kakao Login Redirect URL Page</div>
}