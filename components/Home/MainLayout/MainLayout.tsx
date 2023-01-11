import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Layout from '../../Layout/Layout';
import { BottomLeftDots, TopRightDots } from '../../Dots';
import { useScrollPosition } from '../../Header/useScrollPosition';
import { EffectCube, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export const MainLayout = () => {
  const [count, setCount] = useState(0);
  const [pauseSlider, setPauseSlider] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const scrollPosition = useScrollPosition();
  


  const imageObject = [
    {
      image: '/codding.png',
      id: 0,
      visible: true,
    },
    {
      image: '/banner1.png',
      id: 1,
      visible: false,
    },
    {
      image: '/abt2.png',
      id: 2,
      visible: false,
    },
  ];
const swiper = useSwiper();
 

  return (
    <div className={styles.main_background}>
      <div className={styles.hero}>
        <div className={styles.background__image}>
          <img
            src={'/banner-bg-text.png'}
            alt={'Company-Image'}
            style={{ width: '320px', height: '360px' }}
          />
        </div>
        <div className={styles.hero__main__image}>
          <span
            className={styles.right__dots}
            style={{
              transform: animate ? 'scale(1.6)' : '',
              transition: animate ? '1s cubic-bezier(.17,.67,.83,.67)' : '',
            }}
          >
            <TopRightDots />
          </span>

          <div
            className={styles.main__image__container}
            
          >
            
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageObject.map((image, key) => {
          return (
            <SwiperSlide key={key}><img src={image.image} height={500}
            width={500} className={styles.main__image}/></SwiperSlide>
          )
        })}
            <div className={styles.slider__buttons}>
              <div>
                {' '}
                <HiOutlineChevronLeft
                 onClick={() => swiper.slidePrev()}
                  className={styles.left__chevron}
                />
              </div>
              <div onClick={() => swiper.slideNext()}>
                <HiOutlineChevronRight
                  className={styles.right__chevron}
                  
                />
              </div>
            </div>
            </Swiper>
          </div>
          <span
            className={styles.left__dots}
            style={{
              transform: animate ? 'scale(1.6)' : '',
              transition: animate ? '1s cubic-bezier(.17,.67,.83,.67)' : '',
            }}
          >
            <BottomLeftDots animate={animate} />
          </span>
        </div>
        <div className={styles.hero__title__section}>
          <h1>
            TAILORED <span style={{ color: ' #0286FF' }}>IT</span> STRATEGY{' '}
            <br />
            TO SOLVE BUSSINES NEEDS
          </h1>
          <p>
            A Tirana Agency specializing in web design,
            <br /> eCommerce development, and product branding.
          </p>
          <Button isPrimary={true}>Contact manager</Button>
        </div>
      </div>
    </div>
  );
};
