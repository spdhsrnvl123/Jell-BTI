import styled, { keyframes } from "styled-components";

const BallonBox = styled.div`
    /* position: relative; */
    width: 100%;
    height: 100%;
`

export const UpDownAnimation = keyframes`
    0%{
        transform: translateY(30px);
    }
    50%{
        transform : translateY(0px);
    }
    100%{
        transform : translateY(-30px);
    }
`

export const BalloonBlue = styled.img.attrs({alt:"파란풍선"})`
    position: absolute;
    left: 35%;
    top:23%;
    width:15%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;

`
export const BalloonGreen = styled.img.attrs({alt:"초록색풍선"})`
    position: absolute;
    top:8%;
    width:15%;
    left: 60%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;
`
export const BalloonRed = styled.img.attrs({alt:"빨간풍선"})`
    position: absolute;
    right: 9%;
    top:26%;
    width:13%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;
`
export const BalloonSkyblue = styled.img.attrs({alt:"파란풍선"})`
    position: absolute;
    width:15%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;

`

const BallonThird = ()=>{
    return (
        <BallonBox>
            <BalloonBlue src="./balloonBlue.png" />
            <BalloonGreen src="./balloonGreen.png" />
            <BalloonRed src="./balloonRed.png" />
        </BallonBox>
    )
}

export default BallonThird;