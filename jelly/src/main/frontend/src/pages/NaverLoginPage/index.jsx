const NaverLogin = () => {
        window.open(
            `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}
&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}
&state=${process.env.TEST_APP_STATE}`
        )
}

export default NaverLogin;