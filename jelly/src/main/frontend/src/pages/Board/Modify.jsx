import React from "react"
import Styled from "styled-components";
import Header from "components/domain/Header";
import Navigation from "components/domain/Navigation";
import { useNavigate } from "react-router-dom";


const Modify = () => {

    const navigate = useNavigate();
    const goToBack = () => {
        navigate("/board");
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 수정하기</Topic>
            <Title
                type="text"
                placeholder="*제목"
            >
            </Title>
            <Content
                type="text"
                placeholder="*글 내용"
            >
            </Content>
            <Button>
                <Button1 type="submit">수정하기</Button1>
                <Button2 type="submit">삭제하기</Button2>
                <Button3 onClick={goToBack}>취소하기</Button3>
            </Button>
        </>
    );
};

const Topic = Styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #F5DA81;
`;

const Title = Styled.input`
    width: 100%;
    height: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 1rem;
    background-color: #F4E6D0;
    font-size: 3rem;
`

const Content = Styled.input`
    width: 100%;
    height: 30rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 2rem;
    background-color: #F4E6D0;
    font-size: 3rem;
`

const Button = Styled.div`
    float: right;
`

const Button1 = Styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
    cursor: pointer;
    font-size: 2rem;
`

const Button2 = Styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
    cursor: pointer;
    font-size: 2rem;
`

const Button3 = Styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
    cursor: pointer;
    font-size: 2rem;
`







export default Modify;