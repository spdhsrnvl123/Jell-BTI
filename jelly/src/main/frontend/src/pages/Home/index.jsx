export default function Home(){
    console.log()
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
    const kakao = ()=>{
        window.open(
            `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
        ,'_self')
    }

    return(
        <>
            <button style={{ border:0}} onClick={kakao}><img style={{width:"200px"}} src="./kakaoLogin.png" /></button>
        </>
    )
}