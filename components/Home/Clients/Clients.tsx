import React, { FunctionComponent } from 'react';
import styles from '../../../styles/components/Clients.module.scss';
import Button from '../../Button';
import { CardZoomOutReveal } from '../../CardZoomOutReveal';

export const Clients = () => {
  return (
    <div className={styles.clients__main__container}>
      <div className={styles.clients__container}>
        <div className={styles.clients__top__container}>
          <div className={styles.client__main}>
            <h1>Our Clients</h1>
          </div>
        </div>
        <div className={styles.latest__work__bottom__container}>
          <div className={styles.latest__work__cards}>
            <div className={styles.latest__work__title_card}>
              <h1 className={styles.latest__work__card__title}>
                Look our latest <br />
                work...
              </h1>
              <p className={styles.latest__work__card__paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
              <div>
                <Button>
                  Our Work
                  {/*<Icon icon={'arrow'} type={IconType.Fill} />*/}
                </Button>
              </div>
            </div>
            <div className={styles.latest__work__slider}>
              {/*<div className={styles.latest__work__top}>*/}
              <CardZoomOutReveal
                title={'Some Title'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={
                  'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
                }
              />
              {/*</div>*/}
            </div>
          </div>
          <div className={styles.bottom__side__card}>
            <CardZoomOutReveal
              title={'Some Title'}
              alt={''}
              description={'Some description about this card and its purpose.'}
              imageSrc={
                'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
              }
            />
            <CardZoomOutReveal
              title={'Some Title'}
              alt={''}
              description={'Some description about this card and its purpose.'}
              imageSrc={
                'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
              }
            />

            <CardZoomOutReveal
              title={'Some Title'}
              alt={''}
              description={'Some description about this card and its purpose.'}
              imageSrc={
                'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?cs=srgb&dl=pexels-uzunov-rostislav-5011647.jpg&fm=jpg'
              }
            />
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
