import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Nav";

const Read = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [board, setBoard] = useState(null);
    const [comment, setComment] = useState([]);
    const [memberAccount, setMemberAccount] = useState("pizzay@kakao.com");
    const [cComment, setCComment] = useState("");

    const fetchData = async () => {
        try {
            const bIdx = new URLSearchParams(location.search).get('bIdx');
            const response = await axios.get(`/board?bIdx=${bIdx}`);
            setBoard(response.data.board);
            setComment(response.data.comment);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [location.search]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const goToBoard = () => {
        navigate("/board");
    };

    const goToModify = () => {
        const bIdx = new URLSearchParams(location.search).get('bIdx');
        navigate(`/modify?bIdx=${bIdx}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const bIdx = new URLSearchParams(location.search).get('bIdx');
        const cContent = cComment; // 댓글 내용이 입력 필드인지 확인 필요

        axios({
            url: "/comment",
            method: "post",
            data: {
                bIdx,
                memberAccount,
                cContent,
            },
        })
            .then((response) => {
                console.log(response);
                fetchData(); // 댓글 작성 후 해당 게시글 다시 불러오기
            })
            .catch((error) => {
                console.log(error);
            });
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

            <CommentList>
                <span>댓글 내용</span>
                <span>작성자</span>
                <span>작성일</span>
            </CommentList>

            {comment.map((board) => (
                <CommentLists key={board.cidx}>
                    <div>{board.ccontent}</div>
                    <div>{board.memberVO && board.memberVO.mnick}</div>
                    <div>{formatDate(board.insertDate)}</div>
                </CommentLists>
            ))}

            <CommentBind>
                <Comment
                    placeholder="*댓글 남기기"
                    value={cComment}
                    onChange={(e) => setCComment(e.target.value)}
                />
                <PassButton onClick={handleSubmit}>남기기</PassButton>
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

const CommentList = Styled.div`
    width: 90%;
    height: 4rem;
    font-size: 3rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;

const CommentLists = Styled.div`
    width: 90%;
    height: 4rem;
    font-size: 3rem;
    border: 2px solid black;
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;



const CommentBind = Styled.div`
    margin-bottom: 2rem;
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

export default Read;