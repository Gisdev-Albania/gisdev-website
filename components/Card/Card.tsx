import React, { useState } from 'react';
import styles from '../../styles/components/Card.module.scss';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

interface CardProps {
  bookTitle?: string;
  bookAuthor?: string;
  bookCategory1?: string;
  numberOfPages?: number;
  bookCode?: string;
  rating?: number;
}

export const Card: React.FC<CardProps> = ({
  bookTitle,
  bookAuthor,
  bookCategory1,
  numberOfPages,
  bookCode,
  rating,
}) => {
  const [color, setColor] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__author}>
            <h1>{bookTitle}</h1>
          </div>
          <div className={styles.card__date}>
            <span>kodi: {bookCode}</span>
          </div>

          <div className={styles.card__footer}>
            <h4>{bookAuthor}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
