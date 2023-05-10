import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from "styled-components";
import Button from "../Button";
import Img from "../Img";
import { modalChange } from "redux/store";
import { useDispatch } from "react-redux";

const ImgBox = styled.div`
  position: relative;
  z-index: 11;
  right: 12%;
  /* background-color: red; */
`

const CardContent = styled.div`
  background: rgba(0, 0, 0, 0.41);
  width: 110px;
  border-top-right-radius : 133px;
  border-bottom-right-radius: 133px;
  padding : 40px 27px;
  position: absolute;
  z-index: -1;
  top:50%;
  left:124%;
  transform: translate(-50%,-50%);
`

const JellyTitle = styled.div`
  font-size : 23px;
  color :#ffffff;
  padding-bottom: 10px;
`


export default function Card({ productList }) {
  const dispatch = useDispatch()
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {productList.map((v, i) => {
          return (
            <SwiperSlide key={v.jidx}>
              <ImgBox>
                <Img src = {v.imageUrl} width={200} height={280} />              
                <CardContent>
                  <JellyTitle>{v.jname}</JellyTitle>
                  <Button onClick={()=>dispatch(modalChange())} fontSize={1.1} bgColor={"#16f916"} padding={"2px 10px"}>상세보기</Button>
                </CardContent>
              </ImgBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
