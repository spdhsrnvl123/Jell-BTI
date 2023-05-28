import Header from "@/components/domain/Header";
import Navigation from "@/components/domain/Navigation";
import Search from "@/components/domain/Search";
import SearchBox from "components/domain/SearchBox";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { asyncUpFetch } from "redux/jellyInfo";
import { useEffect } from "react";
import {
  MyPageBallonBlue,
  MyPageBallonGreen,
  MyPageBallonGreen_2,
  MyPageBallonRed,
  MyPageBallonRed_2,
  MyPageBallonSkyblue_2,
} from "pages/MyPage";
import Button from "components/base/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginBox = styled.div`
    position: absolute;
    right: 4%;
    top:4%;
`

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncUpFetch());
  }, []);
  const navigate=useNavigate()
  
  return (
    <Container>
      <MyPageBallonBlue src="/balloonBlue.png" />
      <MyPageBallonRed src="/balloonRed.png" />
      <MyPageBallonRed_2 src="/balloonRed.png" />
      <MyPageBallonGreen src="/balloonGreen.png" />
      <MyPageBallonGreen_2 src="/balloonGreen.png" />
      <MyPageBallonSkyblue_2 src="/ballonSkyblue.png" />
      <LoginBox>
        <Button onClick={()=>navigate("/home/modal")} fontSize={30} fontWeight={700} padding={"0.6em 0.7em"} bgColor={"rgba(0, 163, 255, 0.2)"}>로그인하기</Button>
      </LoginBox>
      <Header />
      <Navigation />
      <Search />
      <SearchBox />
    </Container>
  );
};

export default Home;
