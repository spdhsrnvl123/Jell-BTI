import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Img from "../Img";
import Button from "../Button";
import Chart from "../Chart";
import Review from "../Review";
import Box from "../Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ModalCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68vw;
  height: 50vw;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalButton = styled.button`
  position: absolute;
  top: -5%;
  right: 5%;
  width: 30px;
  font-size: 101px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 14%;
  left: 2.5%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 37%;
`;

const Title = styled.div`
  font-size: 7vw;
  margin-top: 60px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  margin: 40px auto;
`;

const ChartContainer = styled.div`
  height: 300px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.h2`
  font-size: 3.5vw;
  font-weight: bold;
  padding:0.2vw 4vw;
`

const BoxContainer = styled.ul`
  margin: 0 auto;
`

const StarBox = styled.div`
  display: flex;
  justify-content: center;
`

const Modals = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.jellyInfo);
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (data.status === "complete") {
      let item = data.value.filter((v) => {
        return Number(id) === v.jidx;
      });
      setValue(...item);
    }
  }, [data]);

  return (
    <ModalCotainer>
      <ModalSection>
        <Content>
        <ImgBox>
          <Img src={value.imageUrl} width={"26vw"} />
        </ImgBox>
          <Title>{value.jname}</Title>
          {active ? (
            <>
          <SubTitle>
                &lt;맛 평가&gt;
              </SubTitle>
              <ChartContainer>
                {value.length === 0 ? "Loading..." : <Chart value={value} />}
              </ChartContainer>
              <SubTitle>
                &lt;별점&gt;
              </SubTitle>
              <StarBox>
              {
                [1,2,3,4,5].map((v,i)=>{
                  return               <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  style={{ color: "#f5eb3b" }}
                  size="2x"
                  />
                })
              }
              </StarBox>

              <SubTitle>
                &lt;최근 후기&gt;
              </SubTitle>
          <BoxContainer>
            <Box>1.나는 달아~~! 나는 매워~~! 나는 짜~~!</Box>
            <Box>2.나는 달아~~! 나는 매워~~! 나는 짜~~!</Box>
            <Box>3.나는 달아~~! 나는 매워~~! 나는 짜~~!</Box>
            <Box>4.나는 달아~~! 나는 매워~~! 나는 짜~~!</Box>
            <Box>5.나는 달아~~! 나는 매워~~! 나는 짜~~!</Box>
          </BoxContainer>
          </>
          ) : (
            <Review />
          )}
            {
              active ? <Button
              onClick={() => setActive(!active)}
              fontSize={40}
              bgColor={"#16f916"}
              fontWeight={600}
              padding={"3px 14px"}
              margin={"15px auto"}
            >
              후기 작성하기
            </Button>: null
            }
        </Content>
        <ModalButton onClick={() => navigate("/home")}>&times;</ModalButton>
      </ModalSection>
    </ModalCotainer>
  );
};

export default Modals;