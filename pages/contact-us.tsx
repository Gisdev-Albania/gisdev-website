import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/contactUs.module.scss';
import Button from '../components/Button';

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.navigation__section}>
        <div className={styles.container}>
          <div className={styles.main__title}>
            <h1>Get in touch</h1>
          </div>
          <div className={styles.form__wrapper}>
            <div className={styles.form__main}>
              <form action="">
                <input
                  type="text"
                  className={styles.form__field}
                  maxLength={265}
                  name="name"
                  data-name="Name"
                  placeholder="Full Name *"
                  id="name"
                  required={true}
                />
                <input
                  type="email"
                  className={styles.form__field}
                  maxLength={265}
                  name="Email"
                  data-name="Email"
                  placeholder="Email Address *"
                  id="Email"
                  required={true}
                />
                <input
                  type="number"
                  className={styles.form__field}
                  maxLength={265}
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone number (optional)"
                  id="Phone-2"
                />

                <textarea
                  id="field"
                  name="field"
                  maxLength={5000}
                  data-name="field"
                  placeholder="Tell us some more *"
                  required={false}
                  className={styles.textarea}
                ></textarea>

                <Button isPrimary={true}>Send</Button>
              </form>
            </div>
            <div className={styles.main__right}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                dignissimos dolore doloribus eos ipsa nihil odit praesentium
                recusandae, unde. Consectetur corporis cumque dolores eos eum
                eveniet facere laboriosam laudantium magnam, maxime quia,
                tenetur velit voluptatem! Amet corporis eligendi laborum
                mollitia quam tempora? Aut doloribus ipsa itaque, nemo neque
                omnis sunt.
              </span>
              <div>
                <Button isPrimary={true}>Send a request</Button>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </Layout>
  );
};

export default ContactUs;
