const NaverLogin = () => {
    window.open(
        // `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}
        // &client_secret=${process.env.REACT_APP_NAVER_REST_API_SECRET}
        // &redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`
        //     , '_self'
        `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}
        "&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}
        &state=200`
    )
}

export default NaverLogin;


