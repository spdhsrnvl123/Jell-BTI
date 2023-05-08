import styled from "styled-components"

const ImgStyle = styled.img`
    width : ${({width})=>width};
    height : ${({height})=>height};
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`
const Img = ({src,alt,width,height,...props})=>{
    
    return(
        <ImgStyle src={src} width={width} height={height} />
    )
}

export default Img;