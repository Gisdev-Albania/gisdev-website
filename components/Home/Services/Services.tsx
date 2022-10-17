import React from 'react';
import styles from '../../../styles/components/HomeServices.module.scss';
import CardListing from '../../Card/CardListing';

export const Services = () => {
  return (
    <div className={styles.services__main}>
      <h1 className={styles.services__title}>Services</h1>
      <div className={styles.services__card__container}>
        <CardListing />
      </div>
    </div>
  );
};
