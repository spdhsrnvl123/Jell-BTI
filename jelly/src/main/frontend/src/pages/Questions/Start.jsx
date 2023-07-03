import React, { useState } from "react";
import Styled from "styled-components";
import Header from "components/domain/Header";
import Navigation from "components/domain/Navigation";
import { useNavigate } from "react-router-dom";


const Start = () => {
    
    const navigate = useNavigate();
    const goToQuiz = () => {
        navigate("/question");
    };
    
    return (
        <>
            <Header />
            <Navigation />

            <Topic>젤리 테스트</Topic>

            <TopTitle>
                <Title onClick={goToQuiz}>젤리 테스트 시작하기</Title>
            </TopTitle>
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

const TopTitle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = Styled.button`
    width: 40%;
    height: 10rem;
    font-size: 3rem;
    border: 3px solid black;
    border-radius: 2rem;
    background-color: #EFEFFB;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    cursor: pointer;
`

export default Start;