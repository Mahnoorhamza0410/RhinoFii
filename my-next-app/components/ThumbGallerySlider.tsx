'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay'; // optional: not required usually, but just in case
const images = [
  '/hero-bg.jpg',
  '/Rhino-big.png',
  '/hero-bg.jpg',
  '/Rhino-big.png',
];
function ThumbGallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Image Slider */}
      <Swiper
        spaceBetween={10}
        loop
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnails with Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-black/50 py-4">
        <div className="max-w-4xl mx-auto px-4 overflow-hidden">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            loop
            modules={[Thumbs]}
            className="overflow-hidden"
          >
            {images.map((img, i) => {
              const isActive = activeIndex === i;
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`rounded-[20px] ${
                      isActive
                        ? 'p-[2px] bg-[linear-gradient(90deg,#9F54B6,#2CC0D4)]'
                        : 'p-[1px] border border-white'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${i}`}
                      className="w-full h-20 object-cover rounded-[20px] cursor-pointer transition-opacity duration-200"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default ThumbGallerySlider;