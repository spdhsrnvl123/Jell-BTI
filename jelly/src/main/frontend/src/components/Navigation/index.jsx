import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuBox = styled.ul`
    position: absolute;
    top:27%;
    left:50%;
    transform: translate(-50%,-20%);
    display: flex;
    justify-content: center;
`

const MenuList = styled.li`
    font-size: 20px;
    font-weight: 700;
    font-style : normal;
    line-height : 24px;
    width: 110px;
    padding-left: 51px;
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
            <MenuList><Link to="/mypage">Mypage</Link></MenuList>
        </MenuBox>
    )
}

export default Navigation