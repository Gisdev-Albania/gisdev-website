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
                  'From the simple to the complex, we develop web and mobile software to enable the public and private companies to access, manipulate and manage data. We build strong relationships with our clients by doing three things: being accountable for our projects, making our processes transparent, and delivering excellent results.'
                }
                buttonTitle={'More Info'}
                showButton={true}
              />
            </div>
            <div className={styles.latest__work__slider}>
              <div className={styles.latest__work__top}></div>
            </div>
          </div>
          {/*<div className={styles.bottom__side__card}>*/}
          {/*  <CardZoomOutReveal*/}
          {/*    title={'Some Title'}*/}
          {/*    alt={''}*/}
          {/*    description={'Some description about this card and its purpose.'}*/}
          {/*    imageSrc={*/}
          {/*      'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'*/}
          {/*    }*/}
          {/*  />*/}
          {/*  <CardZoomOutReveal*/}
          {/*    title={'Some Title'}*/}
          {/*    alt={''}*/}
          {/*    description={'Some description about this card and its purpose.'}*/}
          {/*    imageSrc={*/}
          {/*      'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'*/}
          {/*    }*/}
          {/*  />*/}

          {/*  <CardZoomOutReveal*/}
          {/*    title={'Some Title'}*/}
          {/*    alt={''}*/}
          {/*    description={'Some description about this card and its purpose.'}*/}
          {/*    imageSrc={*/}
          {/*      'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'*/}
          {/*    }*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
