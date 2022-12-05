import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Header.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from './useScrollPosition';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let tab = window?.location?.pathname;
    setActiveTab(tab);
  }, []);

  // const activeTab = '/about-us';
  const scrollPosition = useScrollPosition();

  return (
    <>
      <Head>
        <title>GISDEV - Great Information System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/GIS-DEV_logo_final-05.png" />
      </Head>
      <main
        className={
          scrollPosition === 0 ? styles.header__main : styles.header__big
        }
      >
        <div className={styles.header__wrap}>
          <div className={styles.header}>
            <div className={styles.header__logo}>
              <Image
                src={'/GIS-DEV_logo_final-01.png'}
                alt="Logo of the company"
                width={200}
                height={50}
              />
              <div
                className={styles.hamburger__menu}
                onClick={() => setIsVisible(!isVisible)}
              >
                <GiHamburgerMenu style={{ height: '35px', width: '35px' }} />
              </div>
            </div>

            <div className={styles.header__navigation}>
              <Link href={'/'}>
                <a
                  id={'home'}
                  className={activeTab === '/' ? styles.active : ''}
                >
                  HOME
                </a>
              </Link>
              <Link href={'/about-us'}>
                <a
                  id={'aboutUs'}
                  className={activeTab === '/about-us' ? styles.active : ''}
                >
                  ABOUT US
                </a>
              </Link>
              <Link href={'services'}>
                <a
                  id={'services'}
                  className={activeTab === '/services' ? styles.active : ''}
                >
                  OUR SERVICES
                </a>
              </Link>
              <Link href={'our-work'}>
                <a
                  id={'work'}
                  className={activeTab === '/our-work' ? styles.active : ''}
                >
                  WORK
                </a>
              </Link>{' '}
              <div className={styles.header__navbar}>
                <button className={styles.header__navbar__button}>
                  <Link href={'/contact-us'}>
                    <span
                      id={'contactUs'}
                      className={styles.header__navbar__title}
                    >
                      CONTACT US NOW
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div
            className={styles.side__bar}
            style={{
              visibility: isVisible ? 'visible' : 'hidden',
              transition: 'ease-in',
            }}
          >
            <IoMdClose
              onClick={() => setIsVisible(!isVisible)}
              style={{ height: '35px', width: '35px', margin: '50px' }}
            />
            <div className={styles.header__column__navigation}>
              <Link href={'/'}>
                <a
                  id={'home'}
                  className={activeTab === '/' ? styles.active : ''}
                >
                  HOME
                </a>
              </Link>
              <Link href={'/about-us'}>
                <a
                  id={'aboutUs'}
                  className={activeTab === '/about-us' ? styles.active : ''}
                >
                  ABOUT US
                </a>
              </Link>
              <Link href={'services'}>
                <a
                  id={'services'}
                  className={activeTab === '/services' ? styles.active : ''}
                >
                  OUR SERVICES
                </a>
              </Link>
              <Link href={'our-work'}>
                <a
                  id={'work'}
                  className={activeTab === '/our-work' ? styles.active : ''}
                >
                  WORK
                </a>
              </Link>{' '}
              <div className={styles.header__navbar}>
                <button className={styles.header__navbar__button}>
                  <Link href={'/contact-us'}>
                    <span
                      id={'contactUs'}
                      className={styles.header__navbar__title}
                    >
                      CONTACT US NOW
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
