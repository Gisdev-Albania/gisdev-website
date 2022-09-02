import React from 'react';
import styles from '../../styles/components/MainLayout.module.scss';
import Image from 'next/image';

import { BottomLeftDots, TopRightDots } from '../Dots';
import { Header } from '../Header';

export const MainLayout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.header__description}>
        <div className={styles.header__img}>
          <div className={styles.image__frame}>
            <Image
              src={'/codding.png'}
              alt="Logo of the company"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className={styles.header__text__section}>
          <h1 className={styles.header__text}>
            TAILORED <span className={styles.header__text__first}>IT</span>{' '}
            STRATEGY
            <br />
            TO SOLVE BUSSINES NEEDS
          </h1>

          <p className={styles.header__paragraph}>
            A Tirana Agency specializing in web design,
            <br /> eCommerce development, and product branding
          </p>

          <button className={styles.header__button}>
            Contact manager{' '}
            <Image src={'/headerArrow.png'} alt="arrow" width={41} height={0} />
          </button>
        </div>
      </div>
    </div>
  );
};
