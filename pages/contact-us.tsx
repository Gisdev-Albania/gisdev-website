import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/contactUs.module.scss';
import Button from '../components/Button';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import {GrMapLocation} from "react-icons/gr";

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.navigation__section}>
        <div className={styles.container}>
          <div className={styles.form__wrapper}>
            <div className={styles.main__right}>
              <div className={styles.main__title}>
                <h1>
                  Get in
                  <span> touch</span>
                </h1>
              </div>
              <div className={styles.main__paragraph}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque dicta doloremque inventore,
                  iure minima necessitatibus nemo nobis perferendis provident quae quis quod sapiente tenetur, veritatis! Ab aliquam, aut consequuntur delectus dicta doloremque iste laborum minima obcaecati optio perspiciatis quia quo tempore, veritatis voluptates voluptatibus voluptatum.
                  Neque, quaerat temporibus? Accusamus alias doloribus incidunt porro quibusdam vel.
                </span>
              </div>
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

        <div className={styles.mapp__container}>
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
                    <div className={styles.icon}>
                      <GrMapLocation />
                    </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
