import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    right: 4%;
    top:4%;
    display: flex;
    border: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 14px;
    background: rgba(0, 163, 255, 0.1);
    border-radius: 16px;
    a{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        text-decoration: none;
        color: #00A3FF;
    }
`

const LoginButton = ()=>{
    return(
        <Button>
            <Link to="/login">Login</Link>
        </Button>
    )
}

export default LoginButton;