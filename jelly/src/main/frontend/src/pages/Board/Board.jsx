import React, { useState, useEffect } from 'react';
// import axios from "axios";
import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Board = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/writing");
    };

    return (
        <>
            <Header />
            <Navigation />
            <Topic>게시판 목록</Topic>
            <Title>
                <span>글 번호</span>
                <span>글 제목</span>
                <span>작성자</span>
                <span>작성일</span>
            </Title>

            <Title>
                {Board.map((board, idx) => (
                    <td key={board.bIdx}/>
                ))}
                <td>wqer</td>
                <td>dsf</td>
                <td>dasf</td>
                <td>asdf</td>
            </Title>
            {/* //여기에 이제 그 데이터 받아 오는걸 넣으면 될 것 같다. */}
            <Button onClick={handleButtonClick}>글 작성</Button>
        </>
    );
}

const Topic = Styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFFFE0;
    text-align: center;
    font-size: 3rem;
    margin-top: 8rem;
`

const Title = Styled.div`
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Button = Styled.button`
    width: 5rem;
    height: 3rem;
    margin-top: 2rem;
    background-color: skyblue;
    cursor: pointer;
    float: right;
`


export default Board;


// useEffect(() => {
//     fetch('/boards')
//         .then(response => response.json())
//         .then(data => {
//             setBoardList(data.boardList);
//             setCommentCnt(data.commentCnt);
//         });
// }, []);

//     return (
//         <div>
//             <Header />
//             <Navigation />
//             <br />
//             <br />
//             <br />
//             <br />
//             <h1 style={{
//                 color: "#F0E68C",
//                 backgroundColor: "#FFFFE0",
//                 fontSize: "3rem",
//                 textAlign: "center"
//             }}>게시판 목록</h1>

//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>글 번호</TableCell>
//                         <TableCell>글 제목</TableCell>
//                         <TableCell>작성자</TableCell>
//                         <TableCell>작성일</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {boardList.map((board, index) => (
//                         <TableRow key={board.bidx}>
//                             <TableCell>{board.bidx}</TableCell>
//                             <TableCell>
//                                 <Link to={`/board?bIdx=${board.bidx}`}>{board.btitle} {commentCnt[index] !== 0 && `(${commentCnt[index]})`}</Link>
//                             </TableCell>
//                             <TableCell>{board.memberVO.mnick}</TableCell>
//                             <TableCell>{formatDate(board.insertDate)}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//             <Button
//                 component={Link}
//                 to="/write"
//                 variant="contained"
//                 color="primary"
//                 style={{ float: 'right' }}
//             >
//                 글 작성
//             </Button>
//         </div>
//     );




// const navigate = useNavigate();
// const handleButtonClick = () => {
//     navigate("/board");
// };

// const [boardList, setBoardList] = useState([]);
// const [commentCnt, setCommentCnt] = useState([]);

// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
// };