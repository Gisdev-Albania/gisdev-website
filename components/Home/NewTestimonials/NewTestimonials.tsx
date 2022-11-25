import React, { useState } from 'react';
import styles from '../../../styles/components/NewTestimonials.module.scss';
import { CardWrapper } from '../../CardWraper';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Image from 'next/image';

export const NewTestimonials = () => {
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      name: 'Kim Pearce',
      role: 'Chief Executive Officer - Continuum Works',
      text: 'It is rare to find a vendor like GISDEV who go beyond the effective delivery of projects to become a consistently responsive and trusted collaborator.We have launched at least 5 projects with the GISDEV team, all of them successful and extremely professional.',
      visible: true,
      image: '/kim_pearce.jpg',
    },

    {
      name: 'Andrea Cristofoletto',
      role: 'Chief Operating Officer - Cannabiscienza',
      text: 'GISDEVs team did an excellent job.They solved some time consuming tasks for my team on our educational platform and they provided custom web solutionsto improve UX and security of our LMS.Highly recommend, even on short dedlines.',
      visible: false,
      image: '/andrea_cristofoletto.jpg',
    },

    {
      name: 'Ines Michel',
      role: 'Sales Support Professional Asia - SKIDATA AG',
      text: 'GISDEV company supporte us from the scratch with the implementation of our project. They are extremely reliable and work quickly. Great team - highly recommended!',
      visible: false,
      image: '/ines_michel.jpg',
    },
  ];
  const cardObject = {
    name: testimonials[count].name,
    text: testimonials[count].text,
    role: testimonials[count].role,
    image: testimonials[count].image,
  };

  const nextButton = () => {
    setCount(count + 1);
    testimonials[count]?.visible === true;
    testimonials[count + 1]?.visible === false;
    if (count === 2) {
      setCount(0);
    }
  };

  console.log(cardObject);

  return (
    <div className={styles.testimonials__container}>
      <div className={styles.clients__top__container}>
        <div className={styles.client__main}>
          <h1>Testimonials</h1>
        </div>
      </div>

      <div className={styles.testimonials__cards}>
        <div className={styles.testimonials__second__card}>
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
              onClick={nextButton}
            />
          </div>

          <div className={styles.testimonials__card__body}>
            <div className={styles.testimonials__card_body__elements}>
              <Image src={`${cardObject?.image}`} height={60} width={40} />
              <span>
                <p>{cardObject?.name}</p>
                <span>{cardObject?.role}</span>
              </span>
            </div>{' '}
            <p>{cardObject.text}</p>
          </div>
        </div>

        <div className={styles.right__testimonial__Section}>
          <CardWrapper
            title={'What Client Say'}
            paragraph={
              'We guide game-changing companies, across platforms & places, through agile design & digital experience. We make waves.'
            }
            buttonTitle={'Learn More'}
            showButton={true}
          />
        </div>
      </div>
    </div>
  );
};
