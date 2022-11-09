import React, { useState } from 'react';
import { Card, CardProps } from './Card';
import styles from '../../styles/components/CardListing.module.scss';
import { TiVendorAndroid, TiGroup, TiGlobe, TiTick } from 'react-icons/ti';
import {
  SiReact,
  SiHubspot,
  SiMaterialui,
  SiTrustpilot,
  SiInfluxdb,
} from 'react-icons/si';

const data = [
  {
    id: 1,
    bookTitle: 'Web Development',
    isPrimary: true,
    icon: <SiReact />,
  },
  {
    id: 12,
    bookTitle: 'Software Solutions',
    isPrimary: true,
    icon: <SiHubspot />,
  },
  {
    id: 13,
    bookTitle: 'Our services',
    isPrimary: false,
    icon: null,
  },
  {
    id: 14,
    bookTitle: 'Web and UI Design',
    isPrimary: true,
    icon: <SiMaterialui />,
  },
  {
    id: 15,
    bookTitle: 'Quality Assurance\n',
    isPrimary: true,
    icon: <SiTrustpilot />,
  },
  {
    id: 16,
    bookTitle: 'Project Management',
    isPrimary: true,
    icon: <SiInfluxdb />,
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
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardListing;
