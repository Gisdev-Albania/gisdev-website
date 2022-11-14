import React from 'react';
import styles from '../../styles/components/Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillTelephoneFill, BsFacebook } from 'react-icons/bs';
import { RiRecordCircleLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiDribbble } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer_section}>
        <div className={styles.container}>
          <div className={styles.footer__top__area}>
            <div className={styles.footer__center}>
              <div className={styles.footer__left}>
                <div className={styles.footer__top__left}>
                  <Image
                    src={'/GIS-DEV_logo_final-02.png'}
                    alt={''}
                    width={230}
                    height={60}
                  />
                </div>

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

              <div className={styles.footer__right}>
                <div className={styles.footer__right__area}>
                  <div className={styles.area__options}>
                    <div className={styles.area__item}>
                      <h3>Explore On</h3>
                      <div className={styles.footer__area__explorer}>
                        <ul>
                          <Link href={'#'}>
                            <a>Home</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Meet Our Team</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Our Portfolio</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Feedback</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Agency Minimal</a>
                          </Link>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.area__item}>
                      <h3>Our Services</h3>
                      <div className={styles.footer__area__explorer}>
                        <ul>
                          <Link href={'#'}>
                            <a>Web Development</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Software solutions for industries</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Mobile Apps</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Web and UI Design</a>
                          </Link>
                          <Link href={'#'}>
                            <a>GIS Expertise</a>
                          </Link>
                          <Link href={'#'}>
                            <a>Web Mapping</a>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mini__footer_part}>
            <div className={styles.footer__text}>
              <p> © Copyright 2022. All Rights Reserved.</p>
            </div>
            <div className={styles.row__options}>
              <div className={styles.footer__item}>
                <div className={styles.social__area}>
                  <div className={styles.footer__widget}>
                    <h4>Join Our community</h4>
                  </div>
                  <div className={styles.footer__widget}>
                    <ul>
                      <Link href={'#'}>
                        <a>
                          <BsFacebook />
                        </a>
                      </Link>
                      <Link href={'#'}>
                        <a>
                          <AiOutlineTwitter />
                        </a>
                      </Link>
                      <Link href={'#'}>
                        <a>
                          <GrLinkedinOption />
                        </a>
                      </Link>
                      <Link href={'#'}>
                        <a>
                          <FiDribbble />
                        </a>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
