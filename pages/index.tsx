import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { Header } from '../components/Header';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { Footer } from '../components/Footer';
import { MainLayout } from '../components/Home/MainLayout';
import { Services } from '../components/Home/ServicesComponents';
import { LatestWork } from '../components/Home/LatestWork';
import { Clients } from '../components/Home/Clients';
import { JoinTeam } from '../components/Home/JoinTeam';
import { NewTestimonials } from '../components/Home/NewTestimonials';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout>
          <MainLayout />
          <div className={styles.main__layout}>
            <Services />
            <LatestWork />
            <Clients />
            <NewTestimonials />
            <JoinTeam />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Home;
