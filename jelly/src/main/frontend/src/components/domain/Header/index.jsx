import styled from "styled-components"
import img from "../Header/haribo.png"

const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 50px;
    padding-top: 12px;
`

const HomeHriboImage = styled.img.attrs({ alt : 'HomeHribo' })`
    width:170px;
    height:170px;
    filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25));
`

const HomeLogoImage = styled.img.attrs({ alt : 'HomeLogo' })`
    width:360px;
    height:180px;
`

const Header = ()=>{
    return(
        <Container>
            <HomeHriboImage src={img} />
            <HomeLogoImage src="./logo.png" />
        </Container>
    )
}

export default Header;
