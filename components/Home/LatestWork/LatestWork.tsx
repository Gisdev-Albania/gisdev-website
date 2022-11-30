import React, { useRef, useState } from 'react';
import styles from '../../../styles/components/LatestWork.module.scss';
import Image from 'next/image';
import Button from '../../Button';
import Icon, { IconType } from '../../Icon/Icon';
import { CardWrapper } from '../../CardWraper';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { CardZoomOutReveal } from '../../CardZoomOutReveal';

export const LatestWork = () => {
  const [isShown, setIsShown] = useState(false);

  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    setIsShown(true);
    console.log(boxRef, 'box ref');
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  console.log(isShown, 'yepp');
  const projectCards = [
    {
      title: 'First project',
      visible: false,
    },
    {
      title: 'Second project',
      visible: false,
    },
    {
      title: 'Third project',
      visible: false,
    },
    {
      title: 'Fourth project',
      visible: false,
    },
  ];

  return (
    <div className={styles.latest__main__container}>
      <div className={styles.latest__work__container}>
        <div className={styles.latest__work__top__container}>
          <div className={styles.latest__work__main}>
            <h1>Latest work</h1>
          </div>
        </div>
        <div className={styles.latest__work__bottom__container}>
          <div className={styles.latest__work__cards}>
            <div className={styles.latest__work__title_card}>
              <CardWrapper
                title={'Look our latest work....\n'}
                paragraph={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius error et libero neque nobis non, recusandae veniam! Dignissimos eos nihil porro quasi? Aperiam enim fugiat hic nobis optio quaerat quam,.'
                }
                showButton={true}
                buttonTitle={'Show more '}
              />
            </div>
            <div className={styles.latest__work__slider}>
              {projectCards.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles['latest__work__project__cards']} ${
                      isShown ? styles['latest__work__project__hover'] : ''
                    } `}
                    ref={boxRef}
                    onMouseEnter={() => console.log(elem.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {elem.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
