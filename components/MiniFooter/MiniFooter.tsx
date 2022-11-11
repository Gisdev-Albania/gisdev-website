import React from 'react';
import styles from '../../styles/components/MiniFooter.module.scss';
import Button from '../Button';
import Image from 'next/image';

const MiniFooter = () => {
  return (
    <div className={styles.mini__footer__container}>
      <span className={styles.horizontal__line}></span>
      <h1 className={styles.main__title}>
        Want to launch your brand into the future?
        <br />
        <span className={styles.secondary__title}>Strap in and lets go!</span>
      </h1>
      <Button isPrimary={true}>Get started</Button>
      <span className={styles.horizontal__line}></span>
      
    </div>
  );
};

export default MiniFooter;
