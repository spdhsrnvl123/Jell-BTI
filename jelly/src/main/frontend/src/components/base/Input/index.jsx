import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBox from "../../domain/SearchBox"

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;    
`

const InputStyle = styled.input`
    position: absolute;
    top:34%;
    transform: translate(-60%,0);
    left: 50%;
    background: #F5F5F5;
    width:23.5em;
    border: 5px solid #FFFFFF;
    border-radius: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding-left: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
`
const Button = styled.button`
    position: absolute;
    top:34.7%;
    transform: translate(132%,0);
    left: 50%;
    background: rgba(0, 163, 255, 0.2);
    border-radius: 0px 40px 40px 0px;
    z-index: -1;
    width: 7em;
    height: 2.5em;
    gap: 10px;
    font-size: 18px;
    border: 0;
    color: #00A3FF;
    cursor: pointer;
`

const Input = ()=>{
    const [value, setValue] = useState("");
    const [boolean, setBoolean] = useState(true)

    const onChange = (e)=>{
        setValue(e.target.value);
        setBoolean(false);
    }
    
    useEffect(()=>{
        if(value === ""){
            setBoolean(true)
        }
    },[value])


    return(
        <>
        <Container>
            <InputStyle value={value} onChange={onChange} placeholder="Search for the jelly you want..." />
            <Button>
                Search
            </Button>
        </Container>
        <SearchBox boolean={boolean} />
        </>
    )
}

export default Input;