import {useEffect, useState} from "react";

const useAxios = ()=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        axios({
            method: "get",
            url: "/hello",
        }).then((response)=>{
            setData(response);
        });
    },[])
}