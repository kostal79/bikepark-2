import React, { useEffect, useRef, useState } from "react";
import classes from "./CustomSlider.module.css";

const CustomSlider = () => {
  const slidesRefs = [
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];

  const sliderLibraryRef = useRef(null);
  const startX = useRef(null);
  const scrollLeft = useRef(0);
  const isDown = useRef(false);
  const isMoving = useRef(false);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideClickHandler = (event) => {
    setCurrentSlideIndex(event.target.dataset.index);
  };

  const slidesLibrary = slidesRefs.map((image, index) => (
    <img
      className={
        index === Number(currentSlideIndex)
          ? `${classes.slide} ${classes["slide--active"]}`
          : classes.slide
      }
      src={image}
      alt={`slide`}
      data-index={index}
      key={index}
    />
  ));

  const end = (event) => {
    if (event.target.className === `${classes.slide}` && !isMoving.current) {
      slideClickHandler(event);
    }
    isDown.current = false;
    isMoving.current = false;
    sliderLibraryRef.current.style.cursor  = "grab";
  };

  const leave = () => {
    isDown.current = false;
    isMoving.current = false;
    sliderLibraryRef.current.className = classes.library;
  };

  const start = (event) => {
    event.preventDefault();
    isDown.current = true;
    startX.current =
      event.pageX !== undefined
        ? event.pageX
        : event.touches[0].pageX - sliderLibraryRef.current.offsetLeft;
    scrollLeft.current = sliderLibraryRef.current.scrollLeft;
  };

  const move = (event) => {
    if (isDown.current === false) return;

    const x =
      event.pageX !== undefined
        ? event.pageX
        : event.touches[0].pageX - sliderLibraryRef.current.offsetLeft;
    let dist = x - startX.current;
    sliderLibraryRef.current.scrollLeft = scrollLeft.current - dist;
    sliderLibraryRef.current.style.cursor  = "grabbing";

    if (Math.abs(dist) > 2) {
      isMoving.current = true;
    }
  };

  useEffect(() => {
    sliderLibraryRef.current.addEventListener("mousedown", start);
    sliderLibraryRef.current.addEventListener("touchstart", start);

    sliderLibraryRef.current.addEventListener("mousemove", move);
    sliderLibraryRef.current.addEventListener("touchmove", move);

    sliderLibraryRef.current.addEventListener("mouseleave", leave);
    sliderLibraryRef.current.addEventListener("mouseup", end);
    sliderLibraryRef.current.addEventListener("touchend", end);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.current}>
        <img
          className={classes.current__image}
          src={slidesRefs[currentSlideIndex]}
          alt="current bike"
        />
      </div>
      <div className={classes.library} ref={sliderLibraryRef} onDrag={move}>
        {slidesLibrary}
      </div>
    </div>
  );
};

export default CustomSlider;
