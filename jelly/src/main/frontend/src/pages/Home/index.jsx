import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h1>홈페이지 입니다.</h1>
            <ul>
                <li><Link to="/login">카카오로그인</Link></li>
                <li><Link to="/test">젤리 테스트 페이지</Link></li>
                <li><Link to="/profile">프로필 페이지</Link></li>
            </ul>
        </>
    )
}

export default Home;