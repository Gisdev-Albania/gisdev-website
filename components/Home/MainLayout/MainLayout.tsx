import React from 'react';
import styles from '../../../styles/components/MainLayout.module.scss';
import Image from 'next/image';
import Button from '../../Button';

export const MainLayout = () => {
  // Version 0.1

  return (
    <div className={styles.main}>
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

          <Button
            className={styles.header__button}
            isPrimary={true}
            onClick={() => console.log('clickeddd')}
          >
            Contact manager{' '}
          </Button>
        </div>
        {/* <div className={styles.banner__image}>
          <Image src={'/banner-bg-text.png'} width={450} height={500} />
        </div> */}
      </div>
    </div>
  );

  // version 0.2
  // return (
  //   <div className={styles.hero}>
  //     <div className={styles.hero__container}>
  //       <div className={styles.hero__container__left}>
  //         <h1>They are coming</h1>
  //         <h2>Be Prepared</h2>
  //         <p>Sign up now to join the list.</p>
  //         <Button
  //           className={styles.header__button}
  //           isPrimary={true}
  //           onClick={() => console.log('clickeddd')}
  //         >
  //           Contact manager{' '}
  //         </Button>
  //       </div>
  //       <div className={styles.hero__container__right}>
  //         <Image
  //           src={'/img-2.svg'}
  //           width={1100}
  //           height={1000}
  //           className={styles.alien__image}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};
