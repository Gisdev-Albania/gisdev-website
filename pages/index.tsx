import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { MainLayout } from '../components/Home/MainLayout';
import { Services } from '../components/Home/ServicesComponents';
import { LatestWork } from '../components/Home/LatestWork';
import { Clients } from '../components/Home/Clients';
import { NewTestimonials } from '../components/Home/NewTestimonials';
import MiniFooter from '../components/MiniFooter/MiniFooter';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <MainLayout />
        <div className={styles.container__body}>
          <Services />
          <LatestWork />
          <Clients />
          <NewTestimonials />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
