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
  icon?: any;
}

export const Card: React.FC<CardProps> = ({
  bookTitle,
  bookAuthor,
  bookCode,
  isPrimary,
  icon,
}) => {
  return (
    <CardOutlineBorder>
      <div className={isPrimary === true ? styles.card : styles.card__active}>
        <div
          className={
            isPrimary ? styles.card__wrapper__primary : styles.card__wrapper
          }
        >
          <span className={styles.card__title}>{bookTitle}</span>

          {isPrimary === true ? (
            <div className={styles.card__footer}>{icon}</div>
          ) : (
            <Button isPrimary={false}>All Services</Button>
          )}
        </div>
      </div>
    </CardOutlineBorder>
  );
};
