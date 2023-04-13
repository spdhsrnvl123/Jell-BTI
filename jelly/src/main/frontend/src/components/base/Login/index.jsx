import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modals from "../Modals";

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
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
`

const Login = ()=>{
    const [modalOpen,setModalOpen] = useState(false);

    const openModal = ()=>{
        setModalOpen(true);
    }
    const closeModal = ()=>{
        setModalOpen(false);
    }

    return(
        <>
            <Button onClick={openModal}>SIGN IN</Button>
            <Modals open={modalOpen} close={closeModal}>
                        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
            </Modals>
        </>
    )
}

export default Login;