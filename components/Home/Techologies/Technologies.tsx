import React from 'react';
import styles from '../../../styles/components/Technologies.module.scss';
import { CardWrapper } from '../../CardWraper';
import HoneycombLayout from '../../HoneycombLayout/HoneycombLayout';

export const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.technologies__main}>
        <div className={styles.technologies__container}>
          <div className={styles.technologies__top}>
            <h1>Technologies</h1>
          </div>
          <div className={styles.technologies__bottom}>
            <HoneycombLayout />
            <div className={styles.technologies__right}>
              <CardWrapper
                title={'this is a title'}
                paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
                buttonTitle={'Hover me '}
                onClick={() => console.log('Clicked!')}
                showButton={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
