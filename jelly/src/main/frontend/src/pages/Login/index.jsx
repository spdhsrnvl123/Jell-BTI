import Button from "components/base/Button"
import Modal from "components/base/Modal"
import styled from "styled-components"
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

const Cotainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Login = ()=>{
    return(
        <Modal>
            <Cotainer>
                <Button fontSize={35} fontFamily={"pretendard"} padding={"12px 12px"} bgColor={"#FEE500"} borderRadius={0}>
                    <RiKakaoTalkFill style={{verticalAlign:"center"}} />
                     카카오 로그인
                </Button>
                <Button><SiNaver />네이버로그인</Button>
            </Cotainer>
        </Modal>
    )
}

export default Login