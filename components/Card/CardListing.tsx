import React, { useState } from 'react';
import { Card } from './Card';
import styles from '../../styles/components/CardListing.module.scss';

const data = [
  {
    id: 1,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
  {
    id: 12,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
  {
    id: 13,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
  {
    id: 14,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
  {
    id: 15,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
  {
    id: 16,
    bookCategory1: 'book1',
    bookTitle: 'title',
    bookCode: 1234,
    bookAuthor: 'author',
    numberOfPages: 111,
  },
];

const CardListing: React.FC = () => {
  return (
    <>
      <div className={styles.card__listing}>
        <div className={styles.card__data}>
          {data.map((book: any) => (
            <Card
              key={book.id}
              bookCategory1={book.bookCategory1}
              bookTitle={book.bookTitle}
              bookCode={book.bookCode}
              bookAuthor={book.bookAuthor}
              numberOfPages={book.numberOfPages}
              rating={5}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardListing;
