import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
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
            <Button onClick={goToBoard}>글 보기</Button>
        </>
    );
};

const Topic = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #F5DA81;
`;

const Title = styled.div`
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

const List = styled.div`
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

const Button = styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    cursor: pointer;
    float: right;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover {
        background-color: #FFFFE0;
    }
    cursor: pointer;
    font-size: 2rem;
`;

const Loading = styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

export default Read;
