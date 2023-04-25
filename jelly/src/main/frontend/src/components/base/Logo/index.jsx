import styled from "styled-components";

const LogoImage = styled.img.attrs({ alt : 'logo' })`
    width:300px;
`

const Logo = ()=>{
    return (
        <LogoImage src="./logo.png" />
    )
}

export default Logo;