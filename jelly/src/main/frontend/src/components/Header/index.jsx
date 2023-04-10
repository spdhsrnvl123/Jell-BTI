import styled from "styled-components"
import MainImage from "../MainImage"
import Logo from "../Logo"

const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const HomeHriboImage = styled.img.attrs({ alt : 'HomeHribo' })`
    width:168px;
    height:168px;
    filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25));
`

const HomeLogoImage = styled.img.attrs({ alt : 'HomeLogo' })`
    width:300px;
    height:150px;
    margin-top: 12px;
`

const Header = ()=>{
    return(
        <Container>
            <HomeHriboImage src="./haribo.png" />
            <HomeLogoImage src="./logo.png" />
        </Container>
    )
}

export default Header;
