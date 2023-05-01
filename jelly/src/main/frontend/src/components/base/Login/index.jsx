import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modals from "../Modals";
import Button from "../Button";

// const Button = styled.button`
//     /* position: absolute;
//     right: 4%;
//     top:4%; */
//     /* border: 0; */
//     padding: 8px 16px;
//     background: rgba(0, 163, 255, 0.1);
//     font-weight: 700;
//     /* font-size: 16px; */
//     /* cursor: pointer; */
// `

const ButtonBox = styled.div`
    position: absolute;
    right: 4%;
    top:4%;
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
            <ButtonBox>
                <Button fontSize={1.5} fontWeight={700} padding={"0.6em 0.7em"} bgColor={"rgba(0, 163, 255, 0.2)"} onClick={openModal}>로그인하기</Button>
            </ButtonBox>
            <Modals open={modalOpen} close={closeModal}>
                        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
            </Modals>
        </>
    )
}

export default Login;