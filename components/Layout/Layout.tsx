import React from 'react';
import styles from '../../styles/components/Layout.module.scss';
import { Header } from '../Header';
import { useScrollPosition } from '../Header/useScrollPosition';
import { Footer } from '../Footer';
import { NextPage } from 'next';

const Layout = (props: any) => {
  const scrollPosition = useScrollPosition();
  const { children } = props;
  return (
    <>
      <div
        className={styles.main__header}
        style={{
          marginTop: scrollPosition > 0 ? '0' : '1.5rem',
          transition: 'ease .3s ',
        }}
      >
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
