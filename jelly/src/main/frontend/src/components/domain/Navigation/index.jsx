import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuBox = styled.ul`
    display: flex;
    justify-content: center;
`

const MenuList = styled.li`
    font-size: 37px;
    font-weight: 600;
    padding-left: 51px;
    padding: 20px 48px;
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
            <MenuList><Link to="/home">홈</Link></MenuList>
            <MenuList><Link to="">젤리 테스트</Link></MenuList>
            <MenuList><Link to="/board">커뮤니티</Link></MenuList>
            <MenuList><Link to="/mypage">마이페이지</Link></MenuList>
        </MenuBox>
    )
}

export default Navigation