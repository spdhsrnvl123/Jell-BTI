import React from "react"
import styled from "styled-components";
import Header from "components/domain/Header";
// import Navigation from "components/domain/Navigation";
import Navigation from "components/domain/Nav"
import { useState } from "react";
import axios from "axios";

const Result = () => {
    let [mJelly, setMJelly] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();

        mJelly = "2";
        axios({
            url: `/jResult?mJelly=${mJelly}`,
            method: "post",
        })
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>테스트 결과</Topic>
            <Finish>
                <Img />
                <List>당신은 용감한 젤리입니다.</List>
            </Finish>
            <Button onClick={handleSubmit}>클릭미</Button>
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

const Finish = styled.div`
    width: 50%;
    height: 30rem;
    border: 3px solid black;
    border-radius: 2px;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: row;
`

const Img = styled.div`
    width: 40%;
    height: 30rem;
    border: 3px dashed red;
`

const List = styled.div`
    width: 60%;
    height: 30rem;
    border: 3px solid blue;
    font-size: 3rem;
    text-align: center;
`

const Button = styled.button`
    width: 5rem;
    height: 3rem;
    background-origin: skyblue;
    border: 2px solid black;
    float: right;
    font-size: 2rem;
    margin-bottom: 3rem;
    margin-right: 3rem;
    cursor: pointer;
`
export default Result;