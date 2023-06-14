import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import Img from '../Img';

const ModalCotainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:999;
    background-color: rgba(0,0,0,0.3);
`
const ModalSection = styled.section`
    position: absolute;
    top:53%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 33%;
    height: 65%;
    background: #F7FEF7;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ModalButton = styled.button`
    position: absolute;
    top:2%;
    right:6%;
    width: 30px;
    font-size: 51px;
    font-weight: 300;
    border: 0;
    cursor: pointer;
    background-color: transparent;
`

const Modal = ()=>{
    const navigate = useNavigate();
    return(
        <ModalCotainer>
            <ModalSection>
                <Img src="/yellow.png" width={150} />
                <Button onClick={()=>navigate("/login")} fontSize={50}>카카오로그인</Button>
                <Button onClick={() => navigate("/naverlogin")} fontSize={50} >네이버로그인</Button>
                <ModalButton onClick={()=>navigate("/home")}>
                    &times;
                </ModalButton>
            </ModalSection>
        </ModalCotainer>
    )
}

export default Modal;