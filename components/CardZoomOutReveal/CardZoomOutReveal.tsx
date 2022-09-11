import React from 'react';
import styles from '../../styles/components/CardZoomOutReveal.module.scss';
import Image from 'next/image';

interface CardZoomOutRevealProps {
  imageSrc: string;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description: string;
}

export const CardZoomOutReveal: React.FunctionComponent<
  CardZoomOutRevealProps
> = props => {
  const { imageSrc, width, height, title, alt, description } = props;
  return (
    <div className={styles.card}>
      <figure>
        {/*change from img input to IMAGE from next*/}
        <img src={imageSrc} alt={alt} />
        <figcaption>
          <h2>{title}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};
