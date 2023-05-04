import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ReactComponent as ZoominSVG } from "../../assets/zoom.svg";
import { ReactComponent as ZoomoutSVG } from "../../assets/zoomout.svg";
import "./SwiperWithZoom.css";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
import Modal from "../Modal/Modal";

function SwiperWithZoom({slidesRefs}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const [zoomed, setZoomed] = useState();

  const slides = slidesRefs.map((slideRef, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="zoom-container">
          <img src={slideRef} alt="slide" />
          <ZoominSVG
            className="swiper__zoom-container"
            onClick={() => {
              setZoomed(slideRef);
            }}
          />
        </div>
      </SwiperSlide>
    );
  });

  const slidesThumbs = slidesRefs.map((slideRef, index) => {
    return (
      <SwiperSlide key={`thumbs${index}`}>
        <img src={slideRef} alt="slide" />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className="mySwiper2"
      >
        {slides}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slidesThumbs}
      </Swiper>
      {zoomed && (
        <Modal>
          <div className="swiper__modal-underlayer">
            <div className="swiper__modal-wrapper">
              <img className="swiper__modal-image" src={zoomed} alt="zoomed" />
              <ZoomoutSVG
                className="swiper__zoom-container"
                onClick={() => {
                  setZoomed(null);
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SwiperWithZoom;
