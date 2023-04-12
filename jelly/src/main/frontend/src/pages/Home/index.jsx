import axios from "axios";
import { useEffect } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Search from "../../components/Search";
import HariboResult from "../../components/HariboResult";
import styled from "styled-components";

const Home = ()=>{
    return(
        <>
            <Header />
            <Navigation />
            <Search />
            <HariboResult />
        </>
    )
}

export default Home;