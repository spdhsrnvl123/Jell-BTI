import Header from "@/components/domain/Header";
import Navigation from "@/components/domain/Navigation";
import LoginButton from "@/components/base/Login";
import Search from "@/components/domain/Search";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "components/domain/SearchBox";
import styled from "styled-components";
import Button from "components/base/Button";

const Container = styled.div`
    height: 43vh;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Home = ()=>{
    const dispatch = useDispatch();
    const count = useSelector(state=>{
      return state;
    });

    console.log(count)
    return(
        <>
            <LoginButton />
            <Container>
                <Header />
                <Navigation />
                <Search />           
            </Container>
            <SearchBox />
        </>
    )
}

export default Home;