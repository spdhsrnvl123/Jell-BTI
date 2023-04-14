import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    position: absolute;
    z-index: 20;
    bottom:-26%;
    left:50%;
    transform: translate(-50%,-50%);
    background: #FBA0C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 60%;
    height: 52vh;
    border-top-right-radius: 161px;
    border-top-left-radius: 161px;
    ::before{
        content: "";
        position: absolute;
        left: 30%;
        top: 14%;
        border-radius: 50%;
        width: 12%;
        height: 25%;
        background: #FB82B1;
    }
    ::after{
        content: "";
        position: absolute;
        right: 30%;
        top: 14%;
        border-radius: 50%;
        width: 12%;
        height: 25%;
        background: #FB82B1;
    }
`
const Circle = styled.div`
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top:43%;
    left: 16%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FB82B1;
    width: 150px;
    height: 150px;
`
const Circle2 = styled.div`
    position: absolute;
    top:43%;
    right:16%;
    z-index: -1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FB82B1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const CardBox = styled.div`
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translate(-50%,0);
    z-index: 99;
    width: 40%;
    height: 28%;
    background: #FB82B1;
    border-top-right-radius: 41px;
    border-top-left-radius: 41px;
`

const Search = styled.div`
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
    color: white;
    font-size: 56px;
    font-weight: 800;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SearchBox = ({boolean,jelly})=>{
    // console.log(boolean)

    // const productAll = ()=>{
        const [productList, setProductList] = useState([]);
        const [query, setQuery] = useSearchParams();
        let [error, setError] = useState("");

        useEffect(()=>{
            let searchQuery = query.get('jellyName') || "";
            console.log(searchQuery);
    
            let url = `/jellies?jellyName=${searchQuery}`

            console.log(url)
            let result = axios({
                    method: "get",
                    url: url
                }).then((response)=>{
                    console.log(response.data.slice(0,12))
                    setProductList(response.data.slice(0,12))
                });
        },[query])
    
        // console.log(productList)

        // let real = jelly.map((v)=>{
        //     console.log(v.jname)
        //     return v
        // })

        // console.log(real)

    return(
        <>
            <Content />
            <Circle />
            <Circle2 />
            <CardBox>
                {
                    <>{
                        productList.map((v,i)=>{
                            return (
                                <p key={i}>{v.jname}</p>
                            )
                        })
                    }</>
                }
            </CardBox>
        </>
    )
}

export default SearchBox;