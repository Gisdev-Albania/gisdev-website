import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/Services.module.scss';
import Tabs from '../components/TabComponent/Tabs';
import MiniFooter from '../components/MiniFooter/MiniFooter';

const Services = () => {
  return (
    <Layout>
      <section className={styles.services}>
        <div className={styles.services__container}>
          <div className={styles.services__main}>
            <div className={styles.services__clients}>
              <div className={styles.title}>
                <h1>We Are Here To Help You</h1>
                <div className={styles.brochure__info}>
                  <span>
                    Tailored IT strategy to solve business issues. Our 5-phase
                    process ensures your project flows smoothly and efficently.
                    We employ quality control checklists throughout the process
                    and communicate with you on a regular basis about the
                    on-going status of your your project. Check out our services
                    and our solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services__main_section}>
        <div className={styles.services__main_container}>
          <div className={styles.menu}>
            <div className={styles.title__menu}>
              <div className={styles.title__card}>
                <h1>Our services</h1>
              </div>
            </div>

            <div className={styles.card__container}>
              <div className={styles.card__container_main}>
                <div className={styles.primary__card}></div>
                <div className={styles.secondary__card}></div>
              </div>
            </div>
            <div className={styles.card__container}>
              <div className={styles.card__container_main}>
                <div className={styles.secondary__card}></div>
                <div className={styles.primary__card}></div>
              </div>
            </div>
            <div className={styles.card__container}>
              <div className={styles.card__container_main}>
                <div className={styles.primary__card}></div>
                <div className={styles.secondary__card}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services__technologies_section}>
        <div className={styles.services__technologies_container}>
          <div className={styles.menu}>
            <div className={styles.title__menu}>
              <div className={styles.title__card}>
                <h1>Technologies</h1>
              </div>
            </div>
          </div>

          <div className={styles.technologies}>
            <div className={styles.techno__container}>
              <div className={styles.title}>Tech Stack</div>
              <div className={styles.main__techno__wrapper}>
                <h1>We know Technologies</h1>
              </div>
              <div className={styles.text__block}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorum eos quasi facere blanditiis delectus iusto.
                Error, ipsum magnam animi accusamus nihil, voluptas labore illo
                necessitatibus eos earum ipsa culpa a ullam ad provident nobis!
              </div>
            </div>
          </div>

          <div className={styles.technologies_container}>
            <Tabs />
          </div>
        </div>
      </section>

      <br />
      <br />
      <MiniFooter />
    </Layout>
  );
};

export default Services;
