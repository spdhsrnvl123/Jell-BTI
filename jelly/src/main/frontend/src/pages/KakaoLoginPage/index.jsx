const KakaoLogin = ()=>{
           window.open(
            `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}
            &redirect_uri=aae56b5a75ed41619c033ab689aea475`
        ,'_self')
}

export default KakaoLogin;

