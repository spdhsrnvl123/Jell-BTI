import styled from "styled-components";

const List = styled.li`
    width: 333px;
    height: 43px;
    background: #EBFFED;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    font-size: 28px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    margin : 20px 0px;
`

const Box = ({children})=>{
    return <List>{children}</List>
}

export default Box;