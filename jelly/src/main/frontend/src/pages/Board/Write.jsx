import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

const Title = styled.h1`
    font-size : 24px;
    text-align: center;
`

const Write = () => {
    const [value, setValue] = useState('')
    const [subMitData, setSubmitData] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value)
        setSubmitData(e.target[0].value);

        axios({
            url: '/board',
            method: 'post',
            data: {
                boardTitle: subMitData,
                boardContent: subMitData,
                memberAccount: subMitData
            }
        }).then((response) => {
            console.log(response)
        })
    }
    // console.log(value);

    return (
        <>
            <Title>글 목록 등록</Title>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                />
                <button type="submit">제출</button>
            </form>
        </>
    )
}

export default Write