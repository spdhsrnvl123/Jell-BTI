import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Haribo from "@/components/base/Haribo";
import Ballon from "@/components/base/Ballon";
import Button from "@/components/base/Button";
import Logo from "@/components/base/Logo";
import BallonThird from "@/components/base/BallonThird";
import {Link} from "react-router-dom";
import ImgBack from "@/components/base/ImgBack";

const Container = styled.div`
    height: 100vh;
    display: flex;
    overflow: hidden;
`

const HariboBox = styled.div`
    display : flex;
    flex-direction : column;
    width: 100%;
    justify-content : center;
    align-items : center;
    transition: all 1s;
`

const KakaoBox = styled.div`
    position: relative;
    /* left : ${(props) => props.kakaoMove}; */
    transition: all 2s;
`

const SubTitle = styled.div`
    font-size: 52px;
    font-family: 'Inter';
`

const StartPage = ()=>{
    const [move, setMove] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setMove(false)
        },3000)
    },[])

    return(
        <Container>
             {/* hariboMove={move ? "50%": "31%"} */}
            <HariboBox>
                <Haribo />
                <Logo />
                <SubTitle>Jell-BTI</SubTitle>
            </HariboBox>
            {/* kakaoMove={move ? "100%":"50%"} */}
            <KakaoBox>
                <ImgBack /> 
                <BallonThird />
                <Button>
                    <Link to="/home">Jell-BTI 시작하기</Link>
                </Button>
                <Ballon />
            </KakaoBox>
        </Container>
    )
}

export default StartPage;