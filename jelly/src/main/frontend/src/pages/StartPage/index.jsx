import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Haribo from "../../components/base/Haribo";
import Ballon from "../../components/base/Ballon";
import Button from "../../components/base/Button";
import Logo from "../../components/base/Logo";
import BallonThird from "../../components/base/BallonThird";
import {Link} from "react-router-dom";
import ImgBack from "../../components/base/ImgBack";

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
                <Haribo />
                <Logo />
                <SubTitle>Jell-BTI</SubTitle>
            </HariboBox>
            <KakaoBox kakaoMove={move ? "100%":"50%"}>
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