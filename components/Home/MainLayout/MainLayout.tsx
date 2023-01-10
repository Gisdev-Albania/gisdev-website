import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Layout from '../../Layout/Layout';
import { BottomLeftDots, TopRightDots } from '../../Dots';
import { useScrollPosition } from '../../Header/useScrollPosition';

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

  const nextImage = () => {
    setCount(count + 1);
    if (count === 2) {
      setCount(0);
    }
    setAnimate(true);
  };

  const backImage = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(2);
    }
  };

  const displayedImage = {
    image: imageObject[count]?.image,
  };

  useEffect(() => {
    if (scrollPosition > 100) {
      setPauseSlider(false);
    } else {
      setPauseSlider(true);
    }
  }, [scrollPosition]);

  const MINUTE_MS = 3000;

  useEffect(() => {
    if (pauseSlider === true) {
      const interval = setInterval(() => {
        setCount(count + 1);
        setAnimate(true);
        if (count === 2) {
          setCount(0);
        } else count === 2;
      }, MINUTE_MS);
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      console.log('next');
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
      setZoomOut(false);
    }, 500);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomOut(true);
    }, 3000);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  console.log(animate);

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
            style={{
              opacity: animate ? '0' : '1',
              transition: animate ? '1s cubic-bezier(.17,.67,.83,.67)' : '',
              filter: animate ? 'blur(20px)' : '',
              border: animate ? '20px solid #072542' : '',
              transform: animate ? 'scale(0.2)' : '',
            }}
          >
            <img
              src={displayedImage.image}
              height={500}
              width={500}
              alt="main image"
              className={styles.main__image}
              style={{
                transform: zoomOut ? 'scale(0.4)' : '',
                opacity: zoomOut ? '0.05' : '',
              }}
            />

            <div className={styles.slider__buttons}>
              <div>
                {' '}
                <HiOutlineChevronLeft
                  onClick={backImage}
                  className={styles.left__chevron}
                />
              </div>
              <div>
                <HiOutlineChevronRight
                  className={styles.right__chevron}
                  onClick={nextImage}
                />
              </div>
            </div>
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
