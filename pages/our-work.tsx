import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/OurWork.module.scss';
import MiniFooter from '../components/MiniFooter/MiniFooter';

const OurWork = () => {
  const projectCards = [
    {
      title: 'Project 1',
      image: 'null',
      isPrimary: false,
      size: 'medium',
    },
    {
      title: 'Project 2',
      image: 'null',
      isPrimary: true,
      size: 'medium',
    },
    {
      title: 'Project 3',
      image: 'null',
      isPrimary: true,
      size: 'medium',
    },
    {
      title: 'Project 4',
      image: 'null',
      isPrimary: true,
      size: 'big',
    },
    {
      title: 'Project 5',
      image: 'null',
      isPrimary: false,
      size: 'medium',
    },
    {
      title: 'Project 6',
      image: 'null',
      isPrimary: true,
      size: 'small',
    },
    {
      title: 'Project 7',
      image: 'null',
      isPrimary: true,
      size: 'medium',
    },
    {
      title: 'Project 8',
      image: 'null',
      isPrimary: true,
      size: 'medium',
    },
    {
      title: 'Project 9 ',
      image: 'null',
      isPrimary: false,
      size: 'medium',
    },
  ];
  return (
    <Layout>
      <div className={styles.work__main__layout}>
        <div className={styles.main__container}>
          <div className={styles.main__title__container}>
            <h1 className={styles.main__header__title}>
              Making <span style={{ color: '#0286FF' }}>clients</span>
              <br /> brands shine <br />
              brighter since 2013
            </h1>
            <p className={styles.header__main__paragraph}>
              Here are some of our favorite projects created for people were
              proud to partner with:
            </p>
          </div>
          <div className={styles.project__card__container}>
            {projectCards.map((card, index) => {
              return (
                <div
                  key={index}
                  className={styles.card__element}
                  style={{
                    backgroundColor:
                      card.isPrimary === true ? '#1a304d' : '#D9D9D9',
                    height:
                      card.size === 'small'
                        ? '384px'
                        : card.size === 'medium'
                        ? '423px'
                        : '462px',
                        marginBottom: '20px'
                  }}
                >
                  <span>{card.title}</span>
                </div>
              );
            })}
          </div>

          <MiniFooter />
        </div>
      </div>
    </Layout>
  );
};

export default OurWork;
