import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/contactUs.module.scss';
import Button from '../components/Button';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import MiniFooter from '../components/MiniFooter/MiniFooter';
import { RiHome2Line, RiPhoneFill, RiMailFill } from 'react-icons/ri';

const ContactUs = () => {
  const [activeCircle, setActiveCircle] = useState<number>(1);
  const contactUs = [
    {
      id: 1,
      body: 'Rruga Ndreko Rino, P. Viridario 1, Nr. 44, Tiranë, Albania',
      icon: (
        <RiHome2Line
          style={{ color: 'white', height: '50px', width: '50px' }}
        />
      ),
    },
    {
      id: 2,
      body: 'Rruga Ndreko Rino, P. Viridario 1, Nr. 44, Tiranë, Albania',
      icon: (
        <RiPhoneFill
          style={{ color: 'white', height: '50px', width: '50px' }}
        />
      ),
    },
    {
      id: 3,
      body: 'Rruga Ndreko Rino, P. Viridario 1, Nr. 44, Tiranë, Albania',
      icon: (
        <RiMailFill style={{ color: 'white', height: '50px', width: '50px' }} />
      ),
    },
  ];

  return (
    <Layout>
      <div className={styles.navigation__section}>
        <div className={styles.container}>
          <div className={styles.form__wrapper}>
            <div className={styles.main__right}>
              <h1 className={styles.page__title}>
                Get in
                <span> touch</span>
              </h1>

              <div className={styles.main__paragraph}>
                Tell us a bit about yourself and what you would like to chat
                about. Someone from Ground Control will be in touch shortly.
              </div>
            </div>
            <img
              src={'./arrow.png'}
              style={{
                height: '300px',
                width: '300px',
              }}
            />
          </div>
        </div>

        <div className={styles.social__urls}>
          <h1 className={styles.social__title}>
            Lets get <span style={{ color: '#0286FF' }}>social</span>
          </h1>

          <div className={styles.social__content}>
            {contactUs.map((contact, key) => {
              return (
                <div
                  key={key}
                  className={styles.social__content__circle}
                  style={{
                    width: activeCircle === contact.id ? '420px' : '',
                    borderRadius: activeCircle === contact.id ? '50px' : '',
                  }}
                  onClick={() => setActiveCircle(contact.id)}
                >
                  <div
                    style={{
                      padding: activeCircle === contact.id ? '1rem' : '',
                    }}
                  >
                    {contact.icon}
                  </div>{' '}
                  <div
                    style={{
                      display: activeCircle === contact.id ? 'block' : 'none',
                      transition:
                        activeCircle === contact.id ? 'ease-in .5s' : '',
                    }}
                  >
                    <p>{contact.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className={styles.mapp__container}>
          <div className={styles.mapp__main}>
            <div className={styles.left__side}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6917116248874!2d19.810431415906546!3d41.31556980840632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031088743b727%3A0xb72c19f2ced6c110!2sGISDEV!5e0!3m2!1sen!2s!4v1668525669028!5m2!1sen!2s"
                width="760"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={styles.right__side}>
              <div className={styles.right__side_text}>
                <h1>Get In Touch With Us</h1>
              </div>
              <div className={styles.address}>
                <div className={styles.row__container}>
                  <div className={styles.container__box}>
                    <div className={styles.icon}>{/* <TfiMapAlt /> </div>
                    <div className={styles.info__box}>
                      <p>
                        Rruga Ndreko Rino, P. Viridario 1, Nr. 44, Tiranë,
                        Albania
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div className={styles.row__container}>
                    <div className={styles.container__box}>
                      <div className={styles.icon}>
                        <BsFillTelephoneFill />
                      </div>
                      <div className={styles.info__box}>
                        <p>Phone: +355672772097</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.row__container}>
                    <div className={styles.container__box}>
                      <div className={styles.icon}>
                        <TbMessageCircle2 />
                      </div>
                      <div className={styles.info__box}>
                        <p>Email: info@gis-dev.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.form__container}>
          <h1 className={styles.contact__section__title}>
            Join us <span style={{ color: '#0286FF' }}> now</span>
          </h1>
          <div className={styles.contact__section__body}>
            <div className={styles.left__side}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6917116248874!2d19.810431415906546!3d41.31556980840632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031088743b727%3A0xb72c19f2ced6c110!2sGISDEV!5e0!3m2!1sen!2s!4v1668525669028!5m2!1sen!2s"
                width="760"
                height="565"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
          </div>
        </div>
        <MiniFooter />
      </div>
    </Layout>
  );
};

export default ContactUs;
