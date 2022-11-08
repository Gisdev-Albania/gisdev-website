import React from 'react';
import styles from '../../styles/Home.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.topbar__nav}>
          {/*<div className={styles.topbar__content}>*/}
          {/*  <div className={styles.topbar__left}>*/}
          {/*    <div className={styles.topbar__left__text}>*/}
          {/*      <IoLocationSharp />*/}
          {/*      <h5>Tirane, Albania</h5>*/}
          {/*    </div>*/}
          {/*    <div className={styles.topbar__left__text}>*/}
          {/*      <BsFillTelephoneFill />*/}
          {/*      <h5>+355672772097</h5>*/}
          {/*    </div>*/}
          {/*    <div className={styles.topbar__left__text}>*/}
          {/*      <MdMail />*/}
          {/*      <h5>info@gis-dev.com</h5>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={styles.topbar__right}>*/}
          {/*    <div className={styles.topbar__info}>*/}
          {/*      <MdMail />*/}
          {/*    </div>*/}
          {/*    <div className={styles.topbar__info}>*/}
          {/*      <BsFacebook />*/}
          {/*    </div>*/}
          {/*    <div className={styles.topbar__info}>*/}
          {/*      <BsTwitter />*/}
          {/*    </div>*/}
          {/*    <div className={styles.topbar__info}>*/}
          {/*      <GrLinkedinOption />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <Header />
      </div>
      {children}
    </>
  );
};

export default Layout;
