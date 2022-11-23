import React, { useState } from 'react';
import styles from '../../../styles/components/NewTestimonials.module.scss';
import { CardWrapper } from '../../CardWraper';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Card from '../../Card';

export const NewTestimonials = () => {
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      name: 'Kim',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      visible: true,
    },

    {
      name: 'John',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      visible: false,
    },

    {
      name: 'Oliv',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      visible: false,
    },
    {
      name: 'Dan',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      visible: false,
    },
  ];
  const cardObject = {
    name: testimonials[count].name,
    text: testimonials[count].text,
  };

  const nextButton = () => {
    setCount(count + 1);
    testimonials[count]?.visible === true;
    testimonials[count + 1]?.visible === false;
    if (count === 3) {
      setCount(0);
    }
  };

  console.log(cardObject);

  return (
    <div className={styles.testimonials__container}>
      <div className={styles.clients__top__container}>
        <div className={styles.client__main}>
          <h1>Testimonials</h1>
        </div>
      </div>

      <div className={styles.testimonials__cards}>
        <div className={styles.testimonials__second__card}>
          <HiOutlineChevronLeft
            style={{ height: '160px', width: '240px', color: 'white' }}
          />

          <div className={styles.testimonials__card__body}>
            <p>{cardObject.name}</p>
            <p>{cardObject.text}</p>
          </div>
          <HiOutlineChevronRight
            style={{ height: '160px', width: '240px', color: 'white' }}
            onClick={nextButton}
          />
        </div>

        <div className={styles.right__testimonial__Section}>
          <CardWrapper
            title={'What Client Say'}
            paragraph={
              'We guide game-changing companies, across platforms & places, through agile design & digital experience. We make waves.'
            }
            buttonTitle={'Learn More'}
            showButton={true}
          />
        </div>
      </div>
    </div>
  );
};
