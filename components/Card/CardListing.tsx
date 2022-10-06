import React, { useState } from 'react';
import { Card, CardProps } from './Card';
import styles from '../../styles/components/CardListing.module.scss';

const data = [
  {
    id: 1,
    bookTitle: 'Web Development',
    isPrimary: true,
  },
  {
    id: 12,
    bookTitle: 'Software Solutions',
    isPrimary: true,
  },
  {
    id: 13,
    bookTitle: 'Mobile Apps',
    isPrimary: false,
  },
  {
    id: 14,
    bookTitle: 'Web and UI Design',
    isPrimary: true,
  },
  {
    id: 15,
    bookTitle: 'Quality Assurance\n',
    isPrimary: true,
  },
  {
    id: 16,
    bookTitle: 'Project Management',
    isPrimary: true,
  },
];

const CardListing: React.FC = () => {
  return (
    <>
      <div className={styles.card__listing}>
        <div className={styles.card__data}>
          {data.map((card: CardProps) => (
            <Card
              key={card.id}
              bookTitle={card.bookTitle}
              isPrimary={card.isPrimary}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardListing;
