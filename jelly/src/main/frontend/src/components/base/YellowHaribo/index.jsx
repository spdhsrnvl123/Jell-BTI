import styled from "styled-components";

const YellowHariboStyle = styled.img.attrs({alt:"옐로우 하리보"})`
    width: 27%;
    position: absolute;
    top:48%;
    left: 60%;
    transform: translate(-50%,-50%);
`

const YellowHaribo = ()=>{
    return (
        <YellowHariboStyle src="./yellow_haribo.png" />
    )
}

export default YellowHaribo;