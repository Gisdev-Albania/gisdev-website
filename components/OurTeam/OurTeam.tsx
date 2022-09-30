import React from 'react';
import styles from '../../styles/components/OurTeam.module.scss';
import Button from '../Button';

export const OurTeam = () => {
  return (
    <div className={styles.ourteam__main__container}>
      <div className={styles.ourteam__first_element}>
        <h1 className={styles.ourteam__title}>
          Meet our <br /> team
        </h1>

        <Button>Click</Button>
      </div>

      <div className={styles.ourteam__second_section}>
        <div className={styles.ourteam__cards}></div>
        <div className={styles.ourteam__cards}></div>
        <div className={styles.ourteam__cards}></div>
      </div>
    </div>
  );
};
