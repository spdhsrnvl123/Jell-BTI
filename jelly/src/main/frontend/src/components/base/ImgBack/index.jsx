import styled from "styled-components";

const KakaoBackgroundImg = styled.img.attrs({alt:"카카오버튼 배경이미지"})`
    height: 100%;
    transition: all 2s;
`

const ImgBack = ()=>{
    return (
        <KakaoBackgroundImg src="./kakaoBackground.png" />
    )
}

export default ImgBack;