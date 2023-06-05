const KakaoLogin = ()=>{
           window.open(
            `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}
            &redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
        ,'_self')
}

export default KakaoLogin;

