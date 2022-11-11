import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

import { Footer } from '../components/Footer';
import { MainLayout } from '../components/Home/MainLayout';
import { Services } from '../components/Home/ServicesComponents';
import { LatestWork } from '../components/Home/LatestWork';
import { Clients } from '../components/Home/Clients';
import { JoinTeam } from '../components/Home/JoinTeam';
import { NewTestimonials } from '../components/Home/NewTestimonials';
import Layout from '../components/Layout/Layout';
import MiniFooter from '../components/MiniFooter/MiniFooter';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainLayout />
      <div className={styles.container__body}>
        {' '}
        <Services />
        <LatestWork />
        <Clients />
        <NewTestimonials />
        <MiniFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
