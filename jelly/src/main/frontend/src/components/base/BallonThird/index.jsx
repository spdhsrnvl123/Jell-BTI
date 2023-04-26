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

const First = styled.img.attrs({alt:"풍선이미지"})`
    position: absolute;
    left: 35%;
    top:23%;
    width:15%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;

`
const Second = styled.img.attrs({alt:"풍선이미지2"})`
    position: absolute;
    top:8%;
    width:15%;
    left: 60%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;
`
const Thrid = styled.img.attrs({alt:"풍선이미지3"})`
    position: absolute;
    right: 9%;
    top:26%;
    width:13%;
    animation: ${UpDownAnimation} 3s linear infinite alternate;
`

const BallonThird = ()=>{
    return (
        <BallonBox>
            <First src="./balloonFirst.png" />
            <Second src="./balloonSecond.png" />
            <Thrid src="./balloonThird.png" />
        </BallonBox>
    )
}

export default BallonThird;