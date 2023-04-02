import { Link } from "react-router-dom"

const LandingPage = ()=>{
    return(
        <> 
            <h1>HARIBO</h1>
            <h2>Jell-BTI</h2>
            <Link to="home" style={{ fontSize :"30px", border:"4px solid"}}>시작하기</Link>
        </>
    )
}

export default LandingPage;