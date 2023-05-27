import styled from "styled-components";
import Button from "../Button";
import { useInput } from "hooks/useInput";
import { useParams } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 470px;
  height: 270px;
  background: #d9d9d9;
  border-radius: 30px;
  border: 0;
  margin-bottom: 20px;
  font-size: 35px;
  padding: 0px 20px;
  outline: none;
`;

const Wrap = styled.div`
    display : flex;
    flex-direction: column;
    padding-top:15px;
`

const RatingText = styled.div`
    color : #787878;
    font-size : 12px;
    font-weight : 400;
`

const Stars = styled.div`
    display: flex;
    padding-top:5px;
    & svg{
        color:gray;
        cursor: pointer;
    }
    :hover svg {
    color: #fcc419;
  }
  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #fcc419;
  }
`

const Review = () => {
  const [inputValue, handleChange] = useInput("");
  const params = useParams();
  

  // useEffect(()=>{
  //   axios({
  //     url: '',
  //     method: 'post',
  //     data: {
  //       "jIdx": 4739,
  //       "mNick": "jelly",
  //       "mJelly": "",
  //       "jStar": 4,
  //       "rContent": "제 타입의 젤리네요",
  //       "mEmail": "magicofclown@naver.com"
  //     }
  // }).then((response) => {
  //     console.log(response)
  // }).catch((err)=>{
  //   console.log(err);
  // })
  // },[])


  return (
    <>
      <Form>
        <TextArea
         type="text"
         placeholder="후기를 입력해주세요."
         value={inputValue}
         onChange={handleChange}
        >
        </TextArea>
        <Button
          fontSize={40}
          bgColor={"#16f916"}
          fontWeight={600}
          padding={"1px 14px"}
          margin={"0px 10px"}
        >
          제출하기
        </Button>
      </Form>
    </>
  );
};

export default Review;
