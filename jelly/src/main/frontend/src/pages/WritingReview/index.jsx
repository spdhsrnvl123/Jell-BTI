import Box from "components/base/Box";
import Modal from "components/base/Modal";
import useAxios from "hooks/useAxios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 7vw;
    text-align: center;
    margin-top: 30px;
`

const WritingReview = ()=>{
    const data = useSelector((state)=>state.userInformation);
    console.log(data)
    const { response, loading, error } = useAxios({
        method: "get",
        url: `/jellies/rates/email/${data.mEmail.replace('@','-')}`,
      });
    
      const a = response?.sort(
        (a, b) => new Date(b.insertDate) - new Date(a.insertDate)
      );
    
      console.log(a);
    return(
        <Modal width={"50%"}>
            <Title>내가 작성한 리뷰</Title>
            {loading
          ? null
          : a.slice(0, 5).map((v, i) => {
              return <Box key={i}>{v.rcontent}</Box>;
            })}
        </Modal>
    )
}

export default WritingReview;