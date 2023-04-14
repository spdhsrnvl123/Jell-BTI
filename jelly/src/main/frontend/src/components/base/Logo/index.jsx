import styled from "styled-components";

const LogoImage = styled.img.attrs({ alt : 'logo' })`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:300px;
    height:150px;
`

const Logo = ()=>{
    return (
        <LogoImage src="./logo.png" />
    )
}

export default Logo;