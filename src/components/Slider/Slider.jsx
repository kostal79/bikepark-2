import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./Slider.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = ({ array, n }) => {
  const allSlides = array.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div className={classes.slide}>
          <p className={classes.slide__text}>{item.text}</p>
          <div className={classes.slide__signature}>{item.user_name}</div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        slidesPerView={n}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={classes.mySwiper}
      >
        {allSlides}
      </Swiper>
    </>
  );
};

export default Slider;
