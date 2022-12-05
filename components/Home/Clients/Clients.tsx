import React, { FunctionComponent } from 'react';
import styles from '../../../styles/components/Clients.module.scss';
import Button from '../../Button';
import { CardZoomOutReveal } from '../../CardZoomOutReveal';
import { CardWrapper } from '../../CardWraper';

export const Clients = () => {
  return (
    <div className={styles.clients__main__container}>
      <div className={styles.clients__container}>
        <div className={styles.clients__top__container}>
          <div className={styles.client__main}>
            <h1>Latest work</h1>
          </div>
        </div>
        <div className={styles.client__bottom__container}>
          <div className={styles.client__cards}>
            <div className={styles.client__title_card}>
              <CardWrapper
                title={'this is a title'}
                paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.`}
                buttonTitle={'Learn More'}
                showButton={true}
                primaryText={true}
              />
            </div>
            <div className={styles.bottom__side__card}>
              <CardZoomOutReveal
                title={'Online Learning'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={
                  'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                }
              />
              <CardZoomOutReveal
                title={'Dashboard'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={
                  'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                }
              />

              <CardZoomOutReveal
                title={'Intergoma'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={
                  'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                }
              />
              <CardZoomOutReveal
                title={'Albanian bees'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={
                  'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                }
              />
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
