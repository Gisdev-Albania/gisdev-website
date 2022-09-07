import React from 'react';
import styles from '../../styles/components/Services.module.scss';

export const Services = () => {
  const services = [
    {
      title: 'Web',

      image: null,
      button: null,
    },
    {
      title: 'Android',

      image: null,
      button: null,
    },
    {
      title: 'Our services',

      image: null,
      button: 'Contact manager',
    },

    {
      title: 'IOT',

      image: null,
      button: null,
    },
    {
      title: 'Design',

      image: null,
      button: null,
    },
    {
      title: 'ARM',

      image: null,
      button: null,
    },
  ];

  return (
    <div className={styles.services__main}>
      <h1 className={styles.services__title}>Services</h1>
      <div className={styles.services__card__container}>
        {services.map((card, index) => {
          return (
            <div
              className={
                card.title === 'Our services'
                  ? styles.services__cards__primary
                  : styles.services__cards
              }
              key={index}
            >
              <h1>{card.title === 'Our services' ? card.title : ''}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
