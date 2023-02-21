import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { History } from "swiper";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const goNext = () => {
    // Perform Logic Here then move to next slide

    if (swiper !== null && slideIndex < swiper.slides.length - 1) {
      swiper.slideNext();
      setSlideIndex(slideIndex + 1);
    }
  };

  const goPrev = () => {
    // Perform Logic Here then move to prev slide
    if (swiper !== null && slideIndex > 0) {
      swiper.slidePrev();
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <>
      <Swiper
        direction={"vertical"}
        onSwiper={setSwiper}
        className="mySwiper"
        touchMoveStopPropagation={false}
        preventInteractionOnTransition={true}
        noSwiping={true}
        allowTouchMove={false} // prevents slide change with mouse and touches
        history={{
          key: "uniqueKey",
        }}
        modules={[History]}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide data-history="1">Slide 1</SwiperSlide>
        <SwiperSlide data-history="2">Slide 2</SwiperSlide>
        <SwiperSlide data-history="3">Slide 3</SwiperSlide>
      </Swiper>
      {slideIndex > 0 && <button onClick={goPrev}>Back</button>}
      {slideIndex != swiper?.slides.length - 1 && (
        <button onClick={goNext}>Next</button>
      )}
    </>
  );
}
