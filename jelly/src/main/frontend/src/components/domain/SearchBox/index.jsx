import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { jellyInfoGet, jellyInfoReset } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Card from "components/base/Card";

export const Content = styled.div`
    position: relative;
    margin-top:60px;
    z-index: 10px;
    background: #FBA0C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 55%;
    height: 70vh;
    border-radius: 161px;
    /* ::before{
        content: "";
        position: absolute;
        left: 30%;
        top: 14%;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background: #FB82B1;
    }
    ::after{
        content: "";
        position: absolute;
        right: 30%;
        top: 14%;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background: #FB82B1;
    } */
`

export const Circle = styled.div`
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top:-7%;
    left: -2%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FB82B1;
    width: 150px;
    height: 150px;
`
export const Circle2 = styled.div`
    position: absolute;
    top:-7%;
    right:-2%;
    z-index: -1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FB82B1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const CardBox = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    width: 60%;
    height: 70%;
    background: #FB82B1;
    border-radius: 41px;
    overflow: hidden;
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

const Box = styled.div`
    height: 100%;
    background-color: red;
    align-items: center;
`

const SearchBox = ({boolean,jelly})=>{
        const [productList, setProductList] = useState([]);
        const [query, setQuery] = useSearchParams();

        useEffect(()=>{
            let searchQuery = query.get('jellyName') || "";
            console.log(searchQuery);
            let url = `/jellies?jellyName=${searchQuery}`

            console.log(url)
            axios({
                    method: "get",
                    url: url
                }).then((response)=>{
                    // console.log(response.data)
                    setProductList(response.data)
                });
        },[query])


    return(
        <>
            <Content>
            <Circle />
            <Circle2 />
            <CardBox>
                <Card productList={productList} />
            </CardBox>
            </Content>
        </>
    )
}

export default SearchBox;