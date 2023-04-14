import Header from "../../components/domain/Header";
import Navigation from "../../components/domain/Navigation";
import Input from "../../components/base/Input";
import LoginButton from "../../components/base/Login";

const Home = ()=>{
    return(
        <>
            <LoginButton />
            <Header />
            <Navigation />
            <Input />
        </>
    )
}

export default Home;