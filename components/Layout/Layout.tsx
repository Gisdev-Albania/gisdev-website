import React from 'react';
import styles from '../../styles/Home.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useScrollPosition } from '../Header/useScrollPosition';

const Layout = (props: any) => {

  const scrollPosition = useScrollPosition()

  const { children } = props;
  return (
    <>
      <div className={styles.navbar} style={{marginTop: scrollPosition > 0 ? '0' : '1.5rem', transition: 'ease .3s '}}>
        
        <Header />
      </div>
      {children}
    </>
  );
};

export default Layout;
