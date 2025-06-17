"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from "../customizedSlider.module.css";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SliderCoverFlow({ images = [], components = [], slidesPerView = 3, ...props }) {
  return (
    <>
      <Swiper
      {...props}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.coverFlowWrapper}
      >
        {images && images.length > 0 ? (
        images.map((image, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.slideContent}>
              <Image src={image} alt={`Slide ${index + 1}`} className={styles.image} />
            </div>
          </SwiperSlide>
        ))
      ) : components && components.length > 0 ? (
        components.map((Component, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={styles.slideContent}>
              {Component}
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.slideContent}>
            <h2>No content available</h2>
          </div>
        </SwiperSlide>
      )}
      </Swiper>
    </>
  );
}
