// const NaverLogin = () => {
//         window.open(
//             `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}
//         &redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}
//         &state=${process.env.REACT_APP_TEST_APP_STATE}`
//         ,"_self")
// }

// export default NaverLogin;
const Naver = () => {
    window.open(
        `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=uFF96bkwIoIU1ZNfOobf
    &redirect_uri=http://localhost:4000/oauth2/authorization/naver
    &state=saads`
    ,"_self")
}

export default Naver;