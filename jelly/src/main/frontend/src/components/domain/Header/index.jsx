import styled from "styled-components"

const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 50px;
    padding-top: 12px;
`

const HomeHriboImage = styled.img.attrs({ alt : 'HomeHribo' })`
    width:158px;
    height:158px;
    filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25));
`

const HomeLogoImage = styled.img.attrs({ alt : 'HomeLogo' })`
    width:300px;
    height:150px;
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
