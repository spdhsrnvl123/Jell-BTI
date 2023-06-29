import Button from "components/base/Button";
import Img from "components/base/Img";
import Modal from "components/base/Modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    font-size : 9vw;
    text-align: center;
`

const SubTitle = styled(Title)`
    font-size :5vw;
    margin-top: 35px;
`

const Name = styled.h2`
font-size: 1.8vw;
text-align: center;
`

const ProductList = ()=>{
    const data = useSelector((state)=>state.jellyInfo);
    console.log(data.value);
    const navigate = useNavigate()

    return(
        <Modal>
            <Title>후기 작성하기</Title>
            <Container>
                {
                    data.value.map((v)=>{
                        return (
                            <Button bgColor={"transparent"} onClick={()=>navigate(`/home/goodsModal/${v.jidx}/review`)}>
                                <Img key={v.jidx} src={v.imageUrl} width={"10vw"} padding={5} cursor={"pointer"} />
                                <Name>{v.jname.slice(4)}</Name>
                            </Button>
                        )
                    })
                }
            </Container>
            <SubTitle>클릭해주세요~!</SubTitle>
        </Modal>
    )
}

export default ProductList;