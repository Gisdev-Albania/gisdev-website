import React, { useState } from 'react';
import styles from '../../styles/components/Card.module.scss';
import { CardOutlineBorder } from '../CardOutlineBorder';
import { DiAndroid } from 'react-icons/di';
import Button from '../Button';

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
            <h1>{bookTitle}</h1>

            {isPrimary === true ? (
              <div className={styles.card__footer}>
                <DiAndroid />
              </div>
            ) : (
              <Button isSecondary={true}>All Services</Button>
            )}
          </div>
        </div>
      </CardOutlineBorder>
    </>
  );
};
