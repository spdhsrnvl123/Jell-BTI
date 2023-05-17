import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";

const Board = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/boards');
                setBoardList(response.data.boardList);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = () => {
        navigate("/writing");
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const handleBoardClick = async (bIdx) => {
        try {
            // 서버로 bIdx 전송
            await axios.get(`/board?bIdx=${bIdx}`);
            // 리다이렉트 또는 다른 동작 수행
            navigate(`/read?bIdx=${bIdx}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>게시판 목록</Topic>
            <Title>
                <span>글 번호</span>
                <span>글 제목</span>
                <span>작성자</span>
                <span>작성일</span>
            </Title>

            {boardList.map((board, index) => (
                <Title key={board.bidx} onClick={() => handleBoardClick(board.bidx)}>
                    <div>{board.bidx}</div>
                    <div>
                        {board.btitle}
                    </div>
                    <div>{board.memberVO.mnick}</div>
                    <div>{formatDate(board.insertDate)}</div>
                </Title>
            ))}

            <Button onClick={handleButtonClick}>글 작성</Button>
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
  height: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  border: 3px solid black;
  cursor: pointer;
`;

const Button = styled.button`
  width: 5rem;
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

export default Board;
