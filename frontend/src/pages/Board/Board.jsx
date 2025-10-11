import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Nav";

const Board = () => {
    const navigate = useNavigate();

    const [boardList, setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumber = Math.ceil(boardList.length / postsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
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

            {currentPosts.map((board, index) => (
                <Title key={board.bidx} onClick={() => handleBoardClick(board.bidx)}>
                    <div>{board.bidx}</div>
                    <div>{board.btitle}</div>
                    <div>{board.memberVO.mnick}</div>
                    <div>{formatDate(board.insertDate)}</div>
                </Title>
            ))}

            <Button onClick={handleButtonClick}>글 작성</Button>

            <PageNumbers>
                {Array.from({ length: pageNumber }).map((_, index) => (
                    <PageNumber
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        active={currentPage === index + 1}
                    >
                        {index + 1}
                    </PageNumber>
                ))}
            </PageNumbers>
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
  width: 90%;
  height: auto; /* 변경: 자동으로 높이 조정 */
  font-size: 3rem;
  border: 2px solid black;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 3rem;
  display: grid; /* 변경: 그리드 레이아웃 적용 */
  grid-template-columns: 1fr 2fr 1fr 1fr; /* 변경: 컬럼 비율 조정 */
  gap: 1rem; /* 변경: 그리드 간격 설정 */
  align-items: center;
  cursor: pointer;
  word-break: break-all; /* 변경: 글 제목이 너무 길 경우 자동으로 줄 바꿈 */
  text-align: center;
`;

const Button = styled.button`
  width: 6rem;
  height: 3rem;
  margin-top: 2rem;
  margin-right: 4.5rem;
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
  margin-bottom: 2rem;
`;

const PageNumbers = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 3rem;
`;

const PageNumber = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.active ? '#F5DA81' : 'transparent')};
  cursor: pointer;
`;

export default Board;
