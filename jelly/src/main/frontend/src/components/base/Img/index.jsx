import styled from "styled-components"

const ImgStyle = styled.img`
    width : ${({width})=>width};
    height : ${({height})=>height};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Img = ({src, width, height, ...props})=>{
    return(
        <ImgStyle src={src} width={width} height={height} style={{...props}} />
    )
}

export default Img;
