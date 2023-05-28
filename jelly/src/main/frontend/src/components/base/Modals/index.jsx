import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Img from "../Img";
import Button from "../Button";
import Chart from "../Chart";
import Review from "../Review";

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
  left: 64%;
  transform: translate(-50%, -50%);
  width: 566px;
  height: 507px;
  background: #f7fef7;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalButton = styled.button`
  position: absolute;
  top: -6%;
  right: 7%;
  width: 30px;
  font-size: 101px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const ImgBox = styled.div`
  position: absolute;
  top: -1.4%;
  left: -64.5%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 70px;
  margin-top: 60px;
`;

const ChartContainer = styled.div`
  height: 300px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
        <ImgBox>
          <Img src={value.imageUrl} width={380} />
        </ImgBox>
        <Content>
          <Title>{value.jname}</Title>
          {active ? (
            <ChartContainer>
              {value.length === 0 ? "Loading..." : <Chart value={value} />}
            </ChartContainer>
          ) : (
            <Review />
          )}
            {
              active ? <Button
              onClick={() => setActive(!active)}
              fontSize={40}
              bgColor={"#16f916"}
              fontWeight={600}
              padding={"1px 14px"}
              margin={"0px 10px"}
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