import styled from "styled-components";

const LogoImage = styled.img.attrs({ alt : 'logo' })`
    width:250px;
`

const Logo = ()=>{
    return (
        <LogoImage src="./logo.png" />
    )
}

export default Logo;