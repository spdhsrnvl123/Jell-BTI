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
                {/* <Button3>삭제하기</Button3> */}
            </Button>

            <CommentList />

            <CommentBind>

                <Comment
                    placeholder="*댓글 남기기"
                />
                <PassButton>남기기</PassButton>

            </CommentBind>

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
    width: 90%;
    height: 4rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

// #B6D014

const List = Styled.div`
    width: 90%;
    height: 35rem;
    font-size: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
`;

const Button = Styled.div`
    float: right;
    margin-right: 4.5rem;
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
const Loading = Styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

const CommentBind = Styled.div`
`

const Comment = Styled.input`
    width: 60%;
    height: 3rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 3rem;
    margin-left: 5rem;
    font-size: 3rem;
    background-color: #F4E6D0;
`

const PassButton = Styled.button`
    width: 6rem;
    height: 3rem;
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 2rem;
    margin-left: 1rem;
    font-size: 2rem;
    background-color: skyblue;
    &:hover{  
    background-color : #FFFFE0;
  }
`

const CommentList = Styled.div`
    width: 90%;
    height: 35rem;
    font-size: 3rem;
    border: 2px solid black;
    border-radius: 15px;
    display: flex;
    margin: 0 auto;
    margin-top: 7rem;
`

export default Read;