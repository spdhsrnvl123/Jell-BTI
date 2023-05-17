import React from "react";
import Header from "components/domain/Header";
import Navigation from "components/domain/Navigation";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Read = () => {

    const navigate = useNavigate();
    const goToBoard = () => {
        navigate("/board");
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>글 목록</Topic>
            <Lists>
                <Title /> 
                {/* 불러온 글 제목 */}
                <List />
                {/* 불러온 글 내용 */}
            </Lists>
            <br />
            <br />
            <br />
            <br />
            {/* 임시처방 */}
            <Comments />
            {/* 불러온 댓글  */}
            <Button
                onClick={goToBoard}
            >
                글 보기</Button>
        </>
    );
};

export default Read;

const Topic = Styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    border: 3px solid #F5DA81;
`
const Lists = Styled.div`
    width: 80%;
    height: 40rem;
    border: 3px solid black;
    margin: 0 auto
`

const Title = Styled.div`
    width: 100%;
    height: 5rem;
    border: 3px dashed red;
`

const List = Styled.div`
    width: 100%;
    height: 35rem;
    border: 3px solid blue;
`

const Comments = Styled.div`
    width: 80%;
    height: 30rem;
    border 3px solid black;
    margin: 0 auto
    /* margin-top: 5rem; */
` 

const Button = Styled.button`
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