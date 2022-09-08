import React from 'react';
import styles from '../../styles/components/LatestWork.module.scss';
import image from '../../public/left.png';
import Image from 'next/image';
import Button from '../Button';

export const LatestWork = () => {
  const services = [
    {
      title: 'Web',

      image: null,
      button: null,
    },
    {
      title: 'Android',

      image: null,
      button: null,
    },
    {
      title: 'Our services',

      image: null,
      button: 'Contact manager',
    },

    {
      title: 'IOT',

      image: null,
      button: null,
    },
    {
      title: 'Design',

      image: null,
      button: null,
    },
    {
      title: 'ARM',

      image: null,
      button: null,
    },
  ];

  return (
    <div className={styles.latest__work__main}>
      <h1 className={styles.latest__work__title}>Latest work</h1>
      <div className={styles.latest__work__cards}>
        <div className={styles.latest__work__title_card}>
          <h1 className={styles.latest__work__card__title}>
            Look our latest <br />
            work...
          </h1>
          <p className={styles.latest__work__card__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>
        </div>
        <div className={styles.latest__work__slider}>
          <div className={styles.slider__buttons}>
            <button>
              <Image src={'/left.png'} height={55} width={55} alt={''} />
            </button>
            <button>
              <Image
                style={{ transform: 'rotate(180deg)' }}
                src={'/left.png'}
                height={55}
                width={55}
                alt={''}
              />
            </button>
          </div>
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
};
