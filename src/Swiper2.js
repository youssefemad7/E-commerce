import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import image5 from "../src/images/Layer-141-1000x1280_540x.jpg";

import "./App.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={120}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {" "}
            <img src={image5} /> <h5>Quilted Gilet With Hood</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            <img src={image5} /> <h5>Quilted Gilet With Hood</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            <img src={image5} /> <h5>Quilted Gilet With Hood</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            <img src={image5} /> <h5>Quilted Gilet With Hood</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            <img src={image5} /> <h5>Quilted Gilet With Hood</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
