import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuBox = styled.ul`
    display: flex;
    justify-content: center;
`

const MenuList = styled.li`
    font-size: 22px;
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
            <MenuList><Link to="/home">Home</Link></MenuList>
            <MenuList><Link to="">Jell Test</Link></MenuList>
            <MenuList><Link to="/board">Community</Link></MenuList>
            <MenuList><Link to="/mypage">Mypage</Link></MenuList>
        </MenuBox>
    )
}

export default Navigation