import styled from "styled-components";
import PropTypes from 'prop-types'

const Root = styled.button`
    padding: ${({padding})=>padding};
    margin : ${({margin})=>margin};
    background: ${({bgColor})=>bgColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: 0;
    width: ${({width})=> width};
    color: ${({color})=> color};
    font-size: ${({fontSize})=>`${fontSize}px`};
    cursor: pointer;
    font-weight:${({fontWeight})=>(fontWeight)};
`

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

Button.propType = {
    fontSize : PropTypes.number,
    fontWeight : PropTypes.number,
    padding : PropTypes.string,
    margin : PropTypes.string,
    bgColor : PropTypes.string,
    color : PropTypes.string,
    width : PropTypes.number
}

export default Button;