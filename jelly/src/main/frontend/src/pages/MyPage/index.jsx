import axios from "axios";
import { BalloonBlue, BalloonGreen, BalloonRed, BalloonSkyblue, UpDownAnimation } from "components/base/BallonThird";
import Button from "components/base/Button";
import Logo from "components/base/Logo";
import { Circle, Content } from "components/domain/SearchBox";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoBox = styled.div`
    position: absolute;
    left: 3%;
    top: 0%;
    cursor: pointer;
`
const PageTitle = styled.h1`
    position: absolute;
    top:12%;
    left:50%;
    text-align: center;
    transform : translate(-50%,-50%);
    font-weight: 600;
    font-size: 55px;
`
const ButtonBox = styled.div`
    position: absolute;
    bottom:2%;
    left: 50%;
    width : 100%;
    text-align : center;
    transform: translate(-50%,-50%);
`
const ProfileImage = styled.div`
    position: absolute;
    top:42%;
    left:50%;
    transform : translate(-50%,-50%);
    background: #EADDDD;
    border: 1px solid #CBC7C7;
    width: 300px;
    height: 300px;
    border-radius:50%;
`

const MyPageBallonBlue = styled(BalloonBlue)`
    width: 5%;
    left: 5%;
    top: 30%;
`
const MyPageBallonBlue_2 = styled(BalloonBlue)`
    width: 7%;
    left: 70%;
    top: 40%;
    animation: ${UpDownAnimation} 8s linear infinite alternate;
`

const MyPageBallonRed = styled(BalloonRed)`
    width: 8%;
    left: 5%;
    top: 60%;
    animation: ${UpDownAnimation} 5s linear infinite alternate;
`
const MyPageBallonRed_2 = styled(BalloonRed)`
    width: 5%;
    right: 7%;
    top: 57%;
`

const MyPageBallonGreen = styled(BalloonGreen)`
    width: 4%;
    left: 5%;
    top: 83%;
    animation: ${UpDownAnimation} 8s linear infinite alternate;
`
const MyPageBallonGreen_2 = styled(BalloonGreen)`
    width: 9%;
    left: 80%;
    top: 10%;
`
const MyPageBallonSkyblue = styled(BalloonSkyblue)`
    width: 9%;
    left:23%;
    top:35%;
`
const MyPageBallonSkyblue_2 = styled(BalloonSkyblue)`
    width: 4%;
    right:3%;
    bottom:5%;
    animation: ${UpDownAnimation} 6s linear infinite alternate;
`

const HariboProfileContent = styled(Content)`
    border-radius: 50%;
    width: 60%;
    height: 60%;
    bottom:20%;
    ::before{
        width: 17%;
        height: 17%;
        top:25%;
        left:23%;
    }
    ::after{
        width: 17%;
        height: 17%;
        top:25%;
        right:23%;
    }
` 

const HariboLeftEar = styled(Circle)`
    width: 17%;
    height: 17%;
    top:20%;
`
const HariboRightEar = styled(Circle)`
    width: 17%;
    height: 17%;
    top:20%;
    left: 65%;
`

const HariboNoise = styled(Circle)`
    z-index: 99;
    width: 10%;
    height: 10%;
    top:57%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 0px 0px 0px;
`

const MyPage = ()=>{
    const userToken = useSelector((state)=> state);
    let token = userToken.userToken
    console.log(token)

    useEffect(()=>{
        axios({
            method : "GET",
            url : `/oauth/login/userInfo?token=${token}`
        }).then((res)=>{
            console.log(res);
        })
    },[])

    const navigate = useNavigate()

    return(
        <>
            {/* MyPageBallon-풍선이미지 */}
            <MyPageBallonBlue src="./balloonBlue.png" />
            <MyPageBallonBlue_2 src="./balloonBlue.png" />
            <MyPageBallonRed src="./balloonRed.png" />
            <MyPageBallonRed_2 src="./balloonRed.png" />
            <MyPageBallonGreen src="./balloonGreen.png" />
            <MyPageBallonGreen_2 src="./balloonGreen.png" />
            <MyPageBallonSkyblue src="./ballonSkyblue.png" />
            <MyPageBallonSkyblue_2 src="./ballonSkyblue.png" />
            <LogoBox onClick={()=>navigate("/home")} >
                <Logo />
            </LogoBox>
            <PageTitle>하리보님의 <br /> <span style={{fontSize:"40px"}}>마이페이지</span></PageTitle>
            <ProfileImage>
                <HariboProfileContent />
                <HariboLeftEar />
                <HariboRightEar />
                <HariboNoise />
            </ProfileImage>
            <ButtonBox>
                <Button fontSize={2.5} padding={"0.5em 0.5em"} margin={"0em 0.5em"} bgColor={"#F7FEF7"} width={"175px"}>내가 작성한<br /> 커뮤니티</Button>
                <Button fontSize={2.5} padding={"0.5em 0.7em"} margin={"0em 0.5em"} bgColor={"#F7FEF7"} width={"175px"}>젤리 테스트<br /> 시작하기</Button>
                <Button fontSize={2.5} padding={"0.5em 0.7em"} margin={"0em 0.5em"} bgColor={"#F7FEF7"} width={"175px"}>젤리 후기<br /> 작성하기</Button>
                <Button fontSize={2.5} padding={"0.5em 0.7em"} margin={"0em 0.5em"} bgColor={"#F7FEF7"} width={"175px"}>내가 작성한<br /> 젤리 후기</Button>
            </ButtonBox>
        </>
    )
}

export default MyPage;
