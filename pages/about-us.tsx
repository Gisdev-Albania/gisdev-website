import React from 'react';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';
import styles from '../styles/components/aboutUs.module.scss';
import Button from '../components/Button';
import Image from 'next/image';
import { CardWrapper } from '../components/CardWraper';
import CardListing from '../components/Card/CardListing';
import { Card } from '../components/Card/Card';
import { CardOutlineBorder } from '../components/CardOutlineBorder';
import { CardZoomOutReveal } from '../components/CardZoomOutReveal';
import MiniFooter from '../components/MiniFooter/MiniFooter';

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <div className={styles.about__us}>
        <div className={styles.about__us__title}>
          {' '}
          <div className={styles.main__title}>
            Hi , we’re <br /> Gis<span style={{ color: '#0574DA' }}>dev</span>
          </div>
          <p>
            We build strong relationships with our clients by being accountable
            for our projects,
            <br />
            making our processes transparent, and delivering excellent results.
          </p>
        </div>{' '}
        <div className={styles.about__us__logo}>
          <Image src={'/gis-logo.png'} height={350} width={350} />
        </div>
      </div>

      <section className={styles.about__main}>
        <div className={styles.about__title}>
          <h1>Why you will trust us</h1>
        </div>

        <div className={styles.about__card__container}>
          <div className={styles.about__cards}>
            <CardWrapper
              title={'Title'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!'
              }
              buttonTitle={'hover here'}
            />
            <CardWrapper
              title={'Title'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!'
              }
              buttonTitle={'hover here'}
            />
            <CardWrapper
              title={'Title'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!'
              }
              buttonTitle={'hover here'}
            />
            <CardWrapper
              title={'Title'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!'
              }
              buttonTitle={'hover here'}
            />
          </div>
        </div>
      </section>

      <section className={styles.about__info}>
        <div className={styles.container}>
          <div className={styles.top__container}>
            <div className={styles.about__main__container}>
              <div className={styles.about__title__section}>
                <div className={styles.title}>Why GisDev </div>
                <p>
                  Prepared is me marianne pleasure likewise debating. Wonder an
                  unable except better stairs do ye admire. His secure called
                  esteem praise.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.bottom__container}>
            <div className={styles.card__listing}>
              <CardOutlineBorder>
                <CardWrapper
                  title={'OUR MISSION'}
                  paragraph={
                    'Our mission is to deliver optimal IT solutions with quality and services at reasonable prices. We have three fundamental tenets; Innovation, Transparency and Agility, that are central to our staff-client interactions.'
                  }
                />
              </CardOutlineBorder>
              <CardOutlineBorder>
                <CardWrapper
                  title={'WHY US'}
                  paragraph={
                    'We have been able to bring together a talented crew of professionals all of which possess outstanding talent. The result of what GISDEV does comes from a blend of passion for success and accumulated skills to help you become more efficient.'
                  }
                />
              </CardOutlineBorder>
              <CardOutlineBorder>
                <CardWrapper
                  title={'OUR VISION'}
                  paragraph={
                    'Our vision is to improve and grow in a constant manner, as a major IT service provider, in providing quality Web and Software Development solutions, in order to become an actor in the competitive global market.'
                  }
                />
              </CardOutlineBorder>
            </div>
          </div>
          {/*<div className={styles.about__join__container}>*/}
          {/*  <div className={styles.about__top__section}>*/}
          {/*    <h1 className={styles.banner__text}>*/}
          {/*      Don`t be Late, Join Us Today!*/}
          {/*    </h1>*/}
          {/*    <Button isPrimary={true}>learn more</Button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>

      <section className={styles.about__company}>
        <div className={styles.about__company__container}>
          <div className={styles.about__company__main}>
            <div className={styles.about__company__top}>
              <div className={styles.about__cards_listing}>
                {/*<Image src={'/abt2.png'} width={546.6} height={560} />*/}
                <CardZoomOutReveal
                  imageSrc={'/abt2.png'}
                  alt={'comapny'}
                  title={'title'}
                  description={'Lorem ipsum dolor sit amet.'}
                />
                <CardWrapper
                  title={'Who We Are'}
                  paragraph={
                    'Our designers and developers are very talented and are experts in their fileds. They each have years of experience in creating IT solutions that are visually appealing, efficient and well-documented.'
                  }
                />
              </div>
            </div>
            {/*<div className={styles.about__company__top}>*/}
            {/*  <div className={styles.about__cards_listing}>*/}
            {/*    <CardWrapper*/}
            {/*      title={'Who We Are'}*/}
            {/*      paragraph={*/}
            {/*        'Our designers and developers are very talented and are experts in their fileds. They each have years of experience in creating IT solutions that are visually appealing, efficient and well-documented.'*/}
            {/*      }*/}
            {/*    />{' '}*/}
            {/*    <Image src={'/abt2.png'} width={546.6} height={560} />*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.about__company__bottom}>
              <div className={styles.about__cards_listing}>
                <CardWrapper
                  title={'Title'}
                  paragraph={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem expedita modi, nobis quasi repellat!'
                  }
                />{' '}
                <Image src={'/abt2.png'} width={546.6} height={560} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.our__clients}>
        <div className={styles.clients__content}>
          <div className={styles.about__us__content}>
            <span>About our clients</span>
            <p>
              Our happy clients continue to grow every day. Enable your business
              with cutting edge enterprise software.
            </p>
          </div>
        </div>
        <div className={styles.slider__container}>
          <div className={styles.slider}>
            <div className={styles.slide__track}>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <MiniFooter />
      </section>
    </Layout>
  );
};

export default AboutUs;
