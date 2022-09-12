import React from 'react';
import styles from '../../../styles/components/Testimonials.module.scss';
import Button from '../../Button';
import { CardZoomOutReveal } from '../../CardZoomOutReveal';
import { CardWrapper } from '../../CardWraper';
import Image from 'next/image';

export const Testimonials = () => {
  return (
    <div className={styles.testimonials__container}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__top__container}>
          <div className={styles.testimonials__main}>
            <h1>Testimonials</h1>
          </div>
        </div>
        <div className={styles.testimonial__bottom__container}>
          <div className={styles.left__testimonial__Section}>
            <div className={styles.left__main__section}>
              <div className={styles.top__left__card}>
                <div className={styles.testimonial__wrapper}>
                  <div className={styles.testimonial__content}>
                    <h6>
                      You all offered really sound advice throughout the
                      process. We came up with a strong brand that will live on
                      for decades. What we all created will soon become part of
                      the soul of AMPP
                    </h6>
                    <div>
                      <div></div>
                      <div className={styles.author}>
                        <h5>Abdullah Ansary</h5>
                        <Button>hover me</Button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.right__testimonial__image}>
                    <Image
                      src={'/banner1.png'}
                      alt={''}
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.top__left__card}>
                <div className={styles.testimonial__wrapper}>
                  <div className={styles.testimonial__content}>
                    <h6>
                      You all offered really sound advice throughout the
                      process. We came up with a strong brand that will live on
                      for decades. What we all created will soon become part of
                      the soul of AMPP
                    </h6>
                    <div>
                      <div></div>
                      <div className={styles.author}>
                        <h5>Abdullah Ansary</h5>
                        <Button>hover me</Button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.right__testimonial__image}>
                    <Image
                      src={'/banner1.png'}
                      alt={''}
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right__testimonial__Section}>
            <CardWrapper
              title={'What Client Say'}
              paragraph={
                'We guide game-changing companies, across platforms & places, through agile design & digital experience. We make waves.'
              }
              buttonTitle={'Explore more'}
              showButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
