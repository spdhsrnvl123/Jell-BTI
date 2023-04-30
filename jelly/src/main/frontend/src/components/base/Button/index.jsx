import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Root = styled.button`
    padding: ${({padding})=>padding};
    margin : ${({margin})=>margin};
    background: ${({bgColor})=>bgColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: 0;
    width: ${({width})=> width};
    color: ${({color})=> color};
    font-size: ${({fontSize})=>`${fontSize}rem`};
    cursor: pointer;
    font-weight:${({fontWeight})=>(fontWeight)};
`
    /* font-size: 2.9rem; */

const Button = ({fontSize, fontWeight, padding, margin, bgColor, color, width, children,...props})=>{
    return (
        <Root
            fontSize = {fontSize}
            fontWeight = {fontWeight}
            padding = {padding}
            margin = {margin}
            bgColor = {bgColor}
            color = {color}
            width ={width}
            {...props}
        >
            {children}
        </Root>
    )
}

export default Button;