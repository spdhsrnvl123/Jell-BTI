import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";

const Modify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [board, setBoard] = useState(null);
    const bIdx = new URLSearchParams(location.search).get('bIdx');
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/board?bIdx=${bIdx}`);
                setBoard(response.data.board);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [bIdx]);

    const goToBoard = () => {
        navigate(`/read?bIdx=${bIdx}`);
    };

    const handleUpdate = async () => {
        try {
            const updatedData = {
                btitle: board.btitle,
                bcontent: board.bcontent,
            };

            await axios.put(`/board?bIdx=${bIdx}`, updatedData);
            navigate(`/read?bIdx=${bIdx}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 수정하기</Topic>
            {board ? (
                <>
                    <Title
                        type="text"
                        placeholder="*제목"
                        value={board.btitle}
                        onChange={(e) =>
                            setBoard({ ...board, btitle: e.target.value })
                        }
                    />
                    <Content
                        type="text"
                        placeholder="*글 내용"
                        value={board.bcontent}
                        onChange={(e) =>
                            setBoard({ ...board, bcontent: e.target.value })
                        }
                    />
                    <Button>
                        <Button1 type="submit" onClick={handleUpdate}>
                            수정하기
                        </Button1>
                        <Button2 onClick={goToBoard}>취소하기</Button2>
                    </Button>
                </>
            ) : (
                <Loading>Loading...</Loading>
            )}
        </>
    );
};


const Topic = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #ffffe0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #f5da81;
`;

const Title = styled.input`
    width: 100%;
    height: 4rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 1rem;
    background-color: #f4e6d0;
    font-size: 3rem;
`;

const Content = styled.input`
    width: 100%;
    height: 30rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 2rem;
    background-color: #f4e6d0;
    font-size: 3rem;
`;

const Button = styled.div`
    float: right;
`;

const Button1 = styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover {
        background-color: #ffffe0;
    }
    cursor: pointer;
    font-size: 2rem;
`;

const Button2 = styled.button`
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: skyblue;
    &:hover {
        background-color: #ffffe0;
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

export default Modify;
