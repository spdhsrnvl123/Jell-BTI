import Box from "components/base/Box";
import Button from "components/base/Button";
import Modal from "components/base/Modal";
import useAxios from "hooks/useAxios";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 7vw;
    text-align: center;
    margin-top: 30px;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DateText = styled.h2`
    font-size : 20px;
    padding-left: 10px;
`

const Content = styled.form`
`

const ReviewList = ()=>{
    //젤리후기 정보 가져오기
    const { response, loading, error } = useAxios({
        method: "get",
        url: `/jellies/rates/email/spdhsrnvl123-naver.com`,
      });

    //최신날짜순으로 내림차순 정렬하기
      const data = response?.sort(
        (a, b) => new Date(b.insertDate) - new Date(a.insertDate)
      );

    const deleteHandler = ({id})=>{
      console.log(id)
    }

    return(
        <Modal width={"50%"}>
            <Title>내가 작성한 리뷰</Title>
            <Container>
            {loading
          ? null
          : data.map((v, i) => {
                console.log(v)
              return (
                <Content key={v.ridx}>
                    <DateText>{v.insertDate.slice(0,10)}</DateText>
                    <Box><p style={{width:"100%"}}>{v.rcontent}</p>
                    <Button fontSize={20} width={40} margin={"0px 10px"}>수정</Button>
                    <Button onClick={()=>deleteHandler(v.ridx)} fontSize={20} width={44}>삭제</Button>
                    </Box>
                </Content>
              )
            })}
            </Container>
        </Modal>
    )
}

export default ReviewList;
