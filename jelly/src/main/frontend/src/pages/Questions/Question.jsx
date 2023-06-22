import React, { useState } from "react";
import Styled from "styled-components";
import Header from "components/domain/Header";
import Navigation from "components/domain/Navigation";
import { useNavigate } from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();

    const [ask, setAsk] = useState();

    // const QuestionClick = () => {
    //     navigate("/board");
    // };

    return (
        <>
            <Header />
            <Navigation />

            <Topic>질문</Topic>

            <TopTitle>
                <Title>안녕하세요?</Title>
            </TopTitle>

            <Quest>
                <Que>질문 1</Que>
                <Que>질문 2</Que>
            </Quest>
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

const Title = Styled.div`
    width: 40%;
    height: 10rem;
    font-size: 3rem;
    border: 3px solid black;
    background-color: #EFEFFB;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

const Quest = Styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
`

const Que = Styled.button`
    width: 15%;
    height: 10rem;
    font-size: 3rem;
    border: 3px solid black;
    background-color: #EFEFFB;
    text-align: center;
    cursor: pointer;
`
export default Question;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/backend/data');
//       setResponseData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       {responseData ? (
//         <div>백엔드에서 받은 데이터: {responseData}</div>
//       ) : (
//         <div>데이터 로딩 중...</div>
//       )}
//     </div>
//   );
// };

// export default MyComponent;