import axios from "axios";
import { useEffect } from "react";

const DetailPage = ()=>{
    
    // useEffect(()=>{
    //     axios({
    //         method: "get",
    //         url: "/jellies",
    //     }).then(function (response) {
    //         console.log(response)
    //     });
    // },[])
    useEffect(()=>{
        fetch("/jellies").then((response)=>{
            console.log(response)
        })
    },[])

    return(
        <>
            <h1>디테일 페이지</h1>
        </>
    )
}

export default DetailPage;