import React from 'react';
import styles from '../../../styles/components/NewTestimonials.module.scss';
import Button from '../../Button';
import { CardOutlineBorder } from '../../CardOutlineBorder';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { CardWrapper } from '../../CardWraper';

export const NewTestimonials = () => {
  const testimonials = [
    {
      name: 'Kim',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      name: 'John',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      name: 'Oliv',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Dan',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className={styles.testimonials__container}>
      <div className={styles.clients__top__container}>
        <div className={styles.client__main}>
          <h1>Testimonials</h1>
        </div>
      </div>

      <div className={styles.testimonials__cards}>
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
        <div className={styles.testimonials__second__card}>
          {testimonials.map((comment, key) => {
            return (
              <>
                <div key={key} className={styles.testimonials__group__card}>
                  <span className={styles.testimonials__card__profile}></span>

                  <div className={styles.testimonioals__card__comment}>
                    {' '}
                    <p className={styles.testimonials__card__paragraph}>
                      {comment.text}
                    </p>
                    <p className={styles.testimonials__card__name}>
                      {comment.name}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
