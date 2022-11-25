import React from 'react';
import styles from '../../../styles/components/LatestWork.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import Icon, { IconType } from '../../Icon/Icon';
import { CardWrapper } from '../../CardWraper';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { CardZoomOutReveal } from '../../CardZoomOutReveal';

export const LatestWork = () => {
  return (
    <div className={styles.latest__main__container}>
      <div className={styles.latest__work__container}>
        <div className={styles.latest__work__top__container}>
          <div className={styles.latest__work__main}>
            <h1>Latest work</h1>
          </div>
        </div>
        <div className={styles.latest__work__bottom__container}>
          <div className={styles.latest__work__cards}>
            <div className={styles.latest__work__title_card}>
              <CardWrapper
                title={'Look our latest work....\n'}
                paragraph={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius error et libero neque nobis non, recusandae veniam! Dignissimos eos nihil porro quasi? Aperiam enim fugiat hic nobis optio quaerat quam,.'
                }
                showButton={true}
                buttonTitle={'Show more '}
              />
            </div>
            <div className={styles.latest__work__slider}>
              <div className={styles.second__card__buttons}>
                <HiOutlineChevronLeft
                  style={{
                    height: '50px',
                    width: '50px',
                    color: 'white',
                    background: '#0e1a2a',
                  }}
                />
                <HiOutlineChevronRight
                  style={{
                    height: '50px',
                    width: '50px',
                    color: 'white',
                    background: '#0286ff',
                  }}
                />
              </div>

              <div className={styles.lates__work__slider__images}>
                <CardZoomOutReveal
                  title={'Some Title'}
                  alt={''}
                  description={
                    'Some description about this card and its purpose.'
                  }
                  imageSrc={
                    'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                  }
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
