import styled from "styled-components";
import { UpDownAnimation } from "../BallonThird";

const BallonImg = styled.img.attrs({alt:"풍선이미지"})`
    position: absolute;
    bottom: -3.5%;
    width: 90%;
    height: 40%;
    right: 0%;
    animation: ${UpDownAnimation} 5s linear infinite alternate;
`

const Ballon = ()=>{
    return (
        <BallonImg src="./balloon.png" />
    )
}

export default Ballon;