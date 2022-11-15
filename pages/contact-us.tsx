import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/components/contactUs.module.scss';
import Button from '../components/Button';
import Link from "next/link";
import {RiRecordCircleLine} from "react-icons/ri";
import {BsFillTelephoneFill} from "react-icons/bs";
import {TbMessageCircle2} from "react-icons/tb";
import {BiTime} from "react-icons/bi";

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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  dignissimos dolorem dolorum in ipsum itaque laborum maiores
                  perspiciatis sunt tempore. Asperiores blanditiis ea earum
                  error eveniet fugiat quas sunt voluptates!Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Ad dignissimos dolorem
                  dolorum in ipsum itaque laborum maiores perspiciatis sunt
                  tempore. Asperiores blanditiis ea earum error eveniet fugiat
                  quas sunt voluptates!
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
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={styles.right__side}>
              <div className={styles.address}>
                <Link href={'#'}>
                  <a>
                    <RiRecordCircleLine />
                    Rruga Ndreko Rino, P. Viridario 1, Nr. 44, Tiranë, Albania
                  </a>
                </Link>
                <Link href={'#'}>
                  <a>
                    <BsFillTelephoneFill />
                    Phone: +355672772097
                  </a>
                </Link>
                <Link href={'#'}>
                  <a>
                    <TbMessageCircle2 />
                    Email: info@gis-dev.com
                  </a>
                </Link>
                <Link href={'#'}>
                  <a>
                    <BiTime />
                    Working Days/Hours: Mon - Sat / 9:00 AM - 6:00 PM
                  </a>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
