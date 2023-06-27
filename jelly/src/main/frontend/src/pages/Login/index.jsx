import Button from "components/base/Button"
import Modal from "components/base/Modal"
import styled from "styled-components"
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { useNavigate } from "react-router-dom";
import Img from "components/base/Img";

const Cotainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`

const Login = ()=>{
    const navigate = useNavigate();
    return(
        <Modal>
            <Cotainer>
                <Img src={"/yellow.png"} width={"33%"} />
                <Button 
                    onClick={()=>navigate("/kakaoLogin")} 
                    fontSize={30} fontFamily={"pretendard"} 
                    padding={"3% 7%"}
                    margin={"-50px"} 
                    bgColor={"#FEE500"}
                    borderRadius={"20px"}
                >
                    <RiKakaoTalkFill style={{verticalAlign:"center",paddingRight:"10px"}} />
                     카카오 로그인
                </Button>
                <Button 
                    onClick={()=>navigate("/naverLogin")} 
                    fontSize={30} fontFamily={"pretendard"} 
                    padding={"3% 7%"}
                    bgColor={"#00c73c"}
                    borderRadius={"20px"}
                    color={"white"}
                >
                    <SiNaver style={{verticalAlign:"center",paddingRight:"10px"}} />
                     네이버 로그인
                </Button>
            </Cotainer>
        </Modal>
    )
}

export default Login