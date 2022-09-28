import React, { useState } from 'react';
import styles from '../../styles/components/Card.module.scss';
import { CardOutlineBorder } from '../CardOutlineBorder';
import Image from 'next/image';

export interface CardProps {
  id?: number;
  bookTitle?: string;
  bookAuthor?: string;
  bookCategory1?: string;
  numberOfPages?: number;
  bookCode?: string;
  rating?: number;
  isPrimary?: boolean;
}

export const Card: React.FC<CardProps> = ({
  bookTitle,
  bookAuthor,
  bookCode,
  isPrimary,
}) => {
  return (
    <>
      <CardOutlineBorder>
        <div className={isPrimary === true ? styles.card : styles.card__active}>
          <div className={styles.card__wrapper}>
            <div className={styles.card__author}>
              <h1>{bookTitle}</h1>
            </div>
            <div className={styles.card__date}>
              <span>{bookCode}</span>
            </div>

            <div className={styles.card__footer}>
              <Image src={'/web.png'} alt={''} width={50} height={50} />
            </div>
          </div>
        </div>
      </CardOutlineBorder>
    </>
  );
};
