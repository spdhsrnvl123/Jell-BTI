import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";
import LoginButton from "../../components/base/Login";
import Search from "../../components/domain/Search";

const Home = ()=>{
    return(
        <>
            <LoginButton />
            <Header />
            <Navigation />
            <Search />
        </>
    )
}

export default Home;