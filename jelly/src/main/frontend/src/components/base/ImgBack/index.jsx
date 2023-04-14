import styled from "styled-components";

const KakaoBackgroundImg = styled.img.attrs({alt:"카카오버튼 배경이미지"})`
    position: absolute;
    height: 100%;
    width: 100%;
`

const ImgBack = ()=>{
    return (
        <KakaoBackgroundImg src="./kakaoBackground.png" />
    )
}

export default ImgBack;