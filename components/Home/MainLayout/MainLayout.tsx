import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Layout from '../../Layout/Layout';
import { BottomLeftDots, TopRightDots } from '../../Dots';

export const MainLayout = () => {
  const [count, setCount] = useState(0);

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

  const displayedImage = {
    image: imageObject[count]?.image,
  };

  const nextImage = () => {
    console.log('hello world');
  };

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
          <span className={styles.right__dots}>
            <TopRightDots />
          </span>

          <div className={styles.main__image__container}>
            <img
              src={displayedImage.image}
              height={500}
              width={500}
              alt="main image"
            />

            <div className={styles.slider__buttons}>
              <div>
                {' '}
                <HiOutlineChevronLeft
                  style={{ height: '50px', width: '50px', color: 'white' }}
                />
              </div>
              <div>
                <HiOutlineChevronRight
                  style={{ height: '50px', width: '50px', color: 'white' }}
                />
              </div>
            </div>
          </div>
          <span className={styles.left__dots}>
            <BottomLeftDots />
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
