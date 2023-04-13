import { Link } from "react-router-dom";
import styled from "styled-components";

const KakaoBtnStyle = styled.img.attrs({alt:"카카오버튼"})`
    width: 67%;
    position: absolute;
    top:68%;
    left: 50%;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const KakaoBtn = ()=>{
    return (
        <Link to="/login">
            <KakaoBtnStyle src="./kakao_btn.png" />
        </Link>
    )
}

export default KakaoBtn;