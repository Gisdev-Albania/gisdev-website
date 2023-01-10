import React, { FunctionComponent } from 'react';
import styles from '../../../styles/components/Clients.module.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
                imageSrc={'/onlineLearning.png'}
              />
              <CardZoomOutReveal
                title={'Dashboard'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={'/myosh-bashboard.png'}
              />

              <CardZoomOutReveal
                title={'Intergoma'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={'/intergoma.png'}
              />
              <CardZoomOutReveal
                title={'Albanian bees'}
                alt={''}
                description={
                  'Some description about this card and its purpose.'
                }
                imageSrc={'/albanianBees.png'}
              />
            </div>
            <div className={styles.mobile__carousel}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  {' '}
                  <CardZoomOutReveal
                    title={'Online Learning'}
                    alt={''}
                    description={
                      'Some description about this card and its purpose.'
                    }
                    imageSrc={'/onlineLearning.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <CardZoomOutReveal
                    title={'Dashboard'}
                    alt={''}
                    description={
                      'Some description about this card and its purpose.'
                    }
                    imageSrc={'/myosh-bashboard.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <CardZoomOutReveal
                    title={'Intergoma'}
                    alt={''}
                    description={
                      'Some description about this card and its purpose.'
                    }
                    imageSrc={'/intergoma.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <CardZoomOutReveal
                    title={'Albanian bees'}
                    alt={''}
                    description={
                      'Some description about this card and its purpose.'
                    }
                    imageSrc={'/albanianBees.png'}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
