import Header from "@/components/domain/Header";
import Navigation from "@/components/domain/Navigation";
import Login from "@/components/base/Login";
import Search from "@/components/domain/Search";
import SearchBox from "components/domain/SearchBox";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Home = ()=>{
    // useEffect(()=>{
    //     axios({
    //         method: "get",
    //         url: "/jellies",
    //       }).then((response) => {
    //         console.log(response.data);
    //       });
    // })
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