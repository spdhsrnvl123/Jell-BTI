import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modals from "../Modals";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { modalChange } from "redux/store";

const ButtonBox = styled.div`
    position: absolute;
    right: 4%;
    top:4%;
`

const Login = ()=>{
    const modal = useSelector((state)=>state.modalAppear);
    const dispatch =useDispatch()

    return(
        <>
            <ButtonBox>
                <Button onClick={()=>dispatch(modalChange())} fontSize={1.5} fontWeight={700} padding={"0.6em 0.7em"} bgColor={"rgba(0, 163, 255, 0.2)"}>로그인하기</Button>
            </ButtonBox>
            <Modals open={modal}>
                        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
            </Modals>
        </>
    )
}

export default Login;