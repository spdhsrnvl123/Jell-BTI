import MainImage from "../../components/MainImage";
import KakaoBackground from "../../components/KakaoBackground";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Ballon from "../../components/Ballon";
import Button from "../../components/Button";
import {Link} from "react-router-dom"
import BallonThird from "../../components/BallonThird";
import Logo from "../../components/Logo";

const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`

const HariboBox = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    /* left : 31%; */
    left : ${(props) => props.hariboMove};
    transition: all 1s;
`

const KakaoBox = styled.div`
    position: relative;
    width: 50%;
    left : ${(props) => props.kakaoMove};
    transition: all 1s;
`

const SubTitle = styled.div`
    position: absolute;
    top:82%;
    left: 50%;
    transform: translate(-22%,-50%);
    width: 405px;
    height: 79px;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 63px;
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
            <HariboBox hariboMove={move ? "50%": "31%"}>
                <MainImage />
                <Logo />
                <SubTitle>Jell-BTI</SubTitle>
            </HariboBox>
            <KakaoBox kakaoMove={move ? "100%":"50%"}>
                <KakaoBackground />
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