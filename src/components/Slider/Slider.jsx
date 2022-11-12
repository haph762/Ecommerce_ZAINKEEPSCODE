import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { SliderProducts } from "../../data/products";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          856: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        navigation={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="Product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
