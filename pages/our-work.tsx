import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/OurWork.module.scss';
import MiniFooter from '../components/MiniFooter/MiniFooter';

const OurWork = () => {
  return (
    <>
      <Layout>
        <div className={styles.work__main__layout}>
          <div className={styles.main__container}>
            <MiniFooter />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OurWork;
