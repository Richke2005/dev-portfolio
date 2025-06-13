import React, { useRef, useState } from 'react';
// Import Swiper React components
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./customizedSlider.module.css";


/**
 * Renders a customizable Swiper slider with navigation controls.
 *
 * @component
 * @param {Object} props
 * @param {string[]} props.images - An array of image URLs to be displayed as slides in the Swiper.
 * @param {React.ComponentType[]} props.components - An array of React component types to be rendered as individual slides.
 * @returns {JSX.Element} The rendered Swiper slider containing the provided components as slides.
 */
function CustomizedSlider({images, components}) {
  return (
    <>
      <Swiper  
        navigation={true}
        slidesPerView={1}
        modules={[Navigation]} 
        className="mySwiper">
          
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <SwiperSlide key={index} style={{display: 'flex', justifyContent: 'center'}}>
                  <div className={`${styles.slideContent}`}>
                    <Image src={image} alt={`Slide ${index + 1}`} className={`${styles.image}`}/>
                  </div>
                </SwiperSlide>
              ))
            ) : (components && components.length > 0 ? (
              components.map((Component, index) => (
                <SwiperSlide key={index} style={{display: 'flex', justifyContent: 'center'}}>
                  <div className={`${styles.slideContent}`}>
                    <Component />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                <div className={`${styles.slideContent}`}>
                  <h2>No content available</h2>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}


CustomizedSlider.propTypes = {
  /**
   * An array of image URLs to be displayed as slides in the Swiper.
   */
  images: PropTypes.arrayOf(PropTypes.string),
  /**
   * An array of React component types to be rendered as individual slides.
   * If no images are provided, these components will be displayed instead.
   */
  components: PropTypes.arrayOf(PropTypes.elementType),
};


export default CustomizedSlider;