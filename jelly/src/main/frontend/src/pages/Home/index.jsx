import Header from "@/components/domain/Header";
import Navigation from "@/components/domain/Navigation";
import Login from "@/components/base/Login";
import Search from "@/components/domain/Search";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "components/domain/SearchBox";
import styled from "styled-components";

const Container = styled.div`
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

    return(
            <Container>
                <Login />
                <Header />
                <Navigation />
                <Search />           
                <SearchBox />
            </Container>
    )
}

export default Home;