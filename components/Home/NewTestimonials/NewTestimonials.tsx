import React from 'react';
import styles from '../../../styles/components/NewTestimonials.module.scss';
import Button from '../../Button';
import { CardOutlineBorder } from '../../CardOutlineBorder';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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
      <h1 className={styles.testimonials__main__title}>Testimonials</h1>

      <div className={styles.testimonials__cards}>
        <div className={styles.testimonials__first__card}>
          <h1 className={styles.testimonials__first__card__title}>
            What’s client
            <br /> say
          </h1>
          <Button>Click for more</Button>
        </div>
        <div className={styles.testimonials__second__card}>
          {testimonials.map((comment, key) => {
            return (
              <>
                <div key={key} className={styles.testimonials__group__card}>
                  <div className={styles.testimonials__card__profile}></div>
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
