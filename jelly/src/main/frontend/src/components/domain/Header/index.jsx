import styled from "styled-components"
import Logo from "components/base/Logo"
import Img from "components/base/Img"

const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 100px;
    padding-top: 12px;
`

const Header = ()=>{
    return(
        <Container>
            <Img src="/haribo.png" width={190} height={180} marginRight={60} />
            <Logo fontSize={180} />
        </Container>
    )
}

export default Header;
