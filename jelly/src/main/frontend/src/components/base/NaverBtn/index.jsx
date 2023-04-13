import styled from "styled-components";

const NaverBtnStyle = styled.img.attrs({alt:"카카오버튼"})`
    width: 67%;
    position: absolute;
    top:85%;
    left: 50%;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const NaverBtn = ()=>{
    return (
        <NaverBtnStyle src="./naver_btn.png" />
    )
}

export default NaverBtn;