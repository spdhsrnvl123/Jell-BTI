import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpFetch } from 'redux/jellyInfo';
import { modalChange } from 'redux/store';
import styled from 'styled-components';


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

const Modals = ()=>{
    const modal = useSelector((state)=>state.modalAppear);
    const state = useSelector((state)=> state);
    const dispatch = useDispatch()

    console.log(state.jellyInfo.status)

    useEffect(()=>{
        dispatch(asyncUpFetch());
    },[]) //모달창이 열리면 젤리정보 가져오기

    return(
        <ModalCotainer change={modal ? "flex":"none"}>
        {
            modal ? (                            
            <ModalSection>
                <ModalButton onClick={()=>dispatch(modalChange())}>
                    &times;
                </ModalButton>
            </ModalSection>
            ) : null
        }
        </ModalCotainer>
    )
}

export default Modals