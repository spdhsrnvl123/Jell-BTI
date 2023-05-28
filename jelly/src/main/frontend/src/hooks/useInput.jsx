import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useInput(initialValue){
    const [inputValue, setInputValue] = useState(initialValue);
    const [boolean, setBoolean] = useState(true);
    const navigate = useNavigate()

    useEffect(()=>{
        if(inputValue === ""){
            setBoolean(true)
        }
    },[inputValue])

    const handleChange = (e) =>{
        setInputValue(e.target.value);
        setBoolean(false);
        console.log(e.target.value)
    };


    const handleSubmit = (event)=>{
        event.preventDefault()
        setInputValue("");
        console.log(event.target[0].value)
        let keyword = event.target[0].value
        navigate(`/home/?jellyName=${keyword}`)
    }

    return [inputValue, handleChange, boolean, handleSubmit];
}