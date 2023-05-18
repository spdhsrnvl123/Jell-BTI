import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";

const Read = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bIdx = new URLSearchParams(location.search).get('bIdx');
                const response = await axios.get(`/board?bIdx=${bIdx}`);
                setBoard(response.data.board);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [location.search]);

    const goToBoard = () => {
        navigate("/board");
    };

    const goToModify = () => {
        const bIdx = new URLSearchParams(location.search).get('bIdx');
        navigate(`/modify?bIdx=${bIdx}`);
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 목록</Topic>
            {board ? (
                <>
                    <Title>{board.btitle}</Title>
                    <List>{board.bcontent}</List>
                </>
            ) : (
                <Loading>Loading...</Loading>
            )}
            <Button>
                <Button1 onClick={goToBoard}>글 보기</Button1>
                <Button2 onClick={goToModify}>수정하기</Button2>
                <Button3>삭제하기</Button3>
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

const Title = Styled.div`
    width: 100%;
    height: 5rem;
    font-size: 3rem;
    margin-top: 2rem;
    border: 2px solid #B6D014;
    border-radius: 15px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const List = Styled.div`
    width: 100%;
    height: 35rem;
    font-size: 3rem;
    margin-top: 2rem;
    border: 2px solid #B0D534;
    border-radius: 15px;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
`;

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
// #16f916 다른 버튼 색상
//#F5DA81

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

const Loading = Styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

export default Read;
