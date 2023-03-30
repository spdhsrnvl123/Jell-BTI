import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function KakaoLogin(){
    const navigate = useNavigate();

    useEffect(()=>{
        try{
            
            const url = new URL(window.location.href);
            let code = url.href
            console.log(code)
            // const code1 = url.searchParams.get("code");
            if(code){
               fetch("/oauth/login/kakao",{
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        code
                    })
               }).then(res => {
                    console.log(res)
               }).catch((error)=>{
                console.log(error)
               })
            }
        }catch(error){
            console.log(error);
        }
    },[])

    return <div>Kakao Login Redirect URL Page</div>
}