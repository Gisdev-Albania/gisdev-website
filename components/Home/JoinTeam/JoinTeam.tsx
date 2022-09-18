import React from 'react';
import Button from '../../Button';
import styles from '../../../styles/components/JoinTeam.module.scss';

export const JoinTeam = () => {
  return (
    <div className={styles.join__main__container}>
      <div className={styles.join__section}>
        <div className={styles.join__top__section}>
          <h1>Don`t be Late, Join Us Today!</h1>
        </div>
        <div className={styles.join__bottom__section}>
          <Button isPrimary>Join now </Button>
        </div>
      </div>
    </div>
  );
};
