import styled from 'styled-components';
import KakaoBtn from '../KakaoBtn';
import NaverBtn from '../NaverBtn';
import YellowHaribo from '../YellowHaribo';


const ModalCotainer = styled.div`
    display: ${props => props.change};
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

const ModalTextarea = styled.div`
    position: relative;
    display: flex;
    font-weight: 700;
    font-size: 50px;
    top: 35%;
    left: 66%;
    transform: translate(-50%,-50%);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const Modals = ({open,close})=>{
    return(
        <ModalCotainer change={open ? "flex":"none"}>
        {
            open ? (                            
            <ModalSection>
                <ModalTextarea>SIGN IN<YellowHaribo /></ModalTextarea>
                <KakaoBtn />
                <NaverBtn />
                <ModalButton onClick={close}>
                    &times;
                </ModalButton>
            </ModalSection>
            ) : null
        }
    </ModalCotainer>
    )
}

export default Modals