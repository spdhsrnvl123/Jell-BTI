import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuBox = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 47px;
`

const MenuList = styled.li`
    font-size: 20px;
    font-weight: 700;
    font-style : normal;
    line-height : 24px;
    padding-left: 61px;
    :nth-child(1){
        color : #00A3FF;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`

const Navigation = ()=>{
    return(
        <MenuBox>
            <MenuList><Link to="/home">Home</Link></MenuList>
            <MenuList><Link to="">Jell Test</Link></MenuList>
            <MenuList><Link>Community</Link></MenuList>
            <MenuList><Link to="/mypage">MyPage</Link></MenuList>
            <Link to="/login">카카오로그인</Link>
        </MenuBox>
    )
}

export default Navigation