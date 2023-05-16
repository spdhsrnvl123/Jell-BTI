import { useEffect } from "react";
import styled from "styled-components";
import { useInput } from "hooks/useInput";
import { asyncUpFetch } from "redux/jellyInfo";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const InputStyle = styled.input`
    margin: 0 auto;
    background: #F5F5F5;
    border: 3px solid #FFFFFF;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    font-weight: 700;
    width: 412px;
    font-size: 23px;
    padding: 4px 35px;
    z-index: 99;
`

const Button = styled.button`
    background: rgba(0, 163, 255, 0.2);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    z-index: 1;
    font-size: 23px;
    padding : 6px 16px;
    border: 0;
    cursor: pointer;
`

const Search = ()=>{
    const [inputValue, handleChange, boolean, handleSubmit] = useInput('');
    return(
            <Container>
                <form onSubmit={handleSubmit}>
                    <InputStyle 
                        value={inputValue} 
                        onChange={handleChange} 
                        placeholder="원하는 젤리를 검색해주세요!" 
                    />
                    <Button type="submit">
                        검색
                    </Button>
                </form>
            </Container>
    )
}

export default Search;

