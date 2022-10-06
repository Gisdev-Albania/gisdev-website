import React from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import { BottomLeftDots, TopRightDots } from '../../Dots';

export const MainLayout = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__container__left}>
          <TopRightDots />
          <BottomLeftDots />
          <div className={styles.header__img}>
            <div className={styles.image__frame}>
              <Image
                src={'/codding.png'}
                alt="Logo of the company"
                height={1200}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className={styles.hero__container__right}>
          <h1> TAILORED IT STRATEGY TO</h1>
          <h3> SOLVE BUSSINES NEEDS</h3>
          <p>
            {' '}
            A Tirana Agency specializing in web design, eCommerce development,
            and product branding
          </p>
          <Button
            className={styles.header__button}
            isPrimary={true}
            onClick={() => console.log('clickeddd')}
          >
            Contact manager
          </Button>
        </div>
        <div className={styles.banner__image}>
          <Image src={'/banner-bg-text.png'} width={450} height={500} />
        </div>
      </div>
    </div>
  );
};
