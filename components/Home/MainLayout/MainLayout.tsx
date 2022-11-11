import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import { BottomLeftDots, TopRightDots } from '../../Dots';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Header } from '../../Header';
import { useScrollPosition } from '../../Header/useScrollPosition';

export const MainLayout = () => {
  const [imageId, setImageId] = useState(1);
  const [imageUrl, setImageUrl] = useState('/codding.png');

  const imageObject = [
    {
      image: '/codding.png',
      id: 0,
    },
    {
      image: '/banner1.png',
      id: 1,
    },
    {
      image: '/abt2.png',
      id: 2,
    },
  ];

  const nextImage = (arg: number) => {
    if (imageId < arg) {
      setImageId(prevState => prevState + 1);
      imageObject.every(element =>
        element.id === imageId ? setImageUrl(element.image) : '/codding.png',
      );
    }
  };

  const backImage = (arg: number) => {
    if (imageId > arg) {
      setImageId(prevState => prevState - 1);
      console.log(imageId, 'image id');
      imageObject.every(element =>
        element.id === imageId ? setImageUrl(element.image) : '/codding.png',
      );
    }
  };

  const scrollPosition = useScrollPosition();

  console.log(imageUrl, 'image url');
  return (
    <div className={styles.main_background}>
      <div
        className={styles.main__header}
        style={{
          marginTop: scrollPosition > 0 ? '0' : '1.5rem',
          transition: 'ease .3s ',
        }}
      >
        <Header />
      </div>

      <div className={styles.hero}>
        <div className={styles.background__image}>
          <Image src={'/banner-bg-text.png'} height={460} width={400} />
        </div>
        <div className={styles.hero__main__image}>
          <div className={styles.main__image__container}>
            <Image src={imageUrl} height={500} width={500} alt="main image" />

            <div className={styles.slider__buttons}>
              <div>
                {' '}
                <HiOutlineChevronLeft
                  style={{ height: '60px', width: '60px', color: 'white' }}
                  onClick={() => backImage(0) as any}
                />
              </div>
              <div>
                {' '}
                <HiOutlineChevronRight
                  style={{ height: '60px', width: '60px', color: 'white' }}
                  onClick={() => nextImage(3) as any}
                />
              </div>
            </div>
          </div>
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
