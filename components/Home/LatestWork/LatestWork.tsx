import React from 'react';
import styles from '../../../styles/components/LatestWork.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import Icon, { IconType } from '../../Icon/Icon';
import { CardWrapper } from '../../CardWraper';
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
                title={'GISDEV is  professional and fully responsible.\n'}
                paragraph={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius error et libero neque nobis non, recusandae veniam! Dignissimos eos nihil porro quasi? Aperiam enim fugiat hic nobis optio quaerat quam, quas rerum sapiente? A accusamus adipisci asperiores atque consequatur consequuntur culpa cupiditate debitis dicta distinctio dolorem doloribus ducimus ea eum explicabo inventore ipsa ipsum laboriosam maiores, modi nesciunt nobis nostrum nulla numquam officia pariatur perferendis placeat quaerat quia quibusdam reiciendis reprehenderit repudiandae sed sunt tempore voluptas voluptatum! Accusantium ad at corporis deserunt, dolorum ea nam quidem rem reprehenderit sed sit ullam ut. Alias consequatur excepturi iure libero minima pariatur praesentium rem sed! Earum, enim?'
                }
                showButton={false}
              />
            </div>
            <div className={styles.latest__work__slider}>
              <div className={styles.latest__work__top}>This is a div</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
