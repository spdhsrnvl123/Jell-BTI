import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/domain/Header';
import Navigation from '../../components/domain/Navigation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/boards', { btitle: title, bcontent: content });
            alert('게시글 작성이 완료되었습니다.');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Header />
            <Navigation />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{
                color: '#F0E68C',
                backgroundColor: '#FFFFE0',
                fontSize: '3rem',
                textAlign: "center"
                }}>글 작성하기</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label="제목"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    required
                    label="내용"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={10}
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ float: 'right' }}
                >
                    등록하기
                </Button>

            </form>
        </div>
    );
}

export default Write;
