// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../src/images/Home-default-1510-3.png";
import image3 from "../src/images/Home-default-1510-4.png";
import "./App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={image2} className="image2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image3} className="image2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image2} className="image2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
