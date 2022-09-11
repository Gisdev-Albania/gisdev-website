import React, { SyntheticEvent, useState } from 'react';
import styles from '../../styles/components/CardWrapper.module.scss';
import Button from '../Button';
import Icon, { IconType } from '../Icon/Icon';

interface CardProps {
  title: string;
  paragraph: string;
  buttonTitle: string;
  onClick?: (e: SyntheticEvent<HTMLElement>) => void;
  showButton?: boolean;
}

export const CardWrapper: React.FunctionComponent<CardProps> = props => {
  const { title, paragraph, buttonTitle, showButton, onClick } = props;
  const [showButtonState, setShowButtonState] = useState<boolean>(false);

  return (
    <div className={styles.card__right__container}>
      <div className={styles.latest__work__title_card}>
        <h1 className={styles.latest__work__card__title}>{title}</h1>
        <p className={styles.card__paragraph}>{paragraph}</p>
        <div>
          {showButton === true ? (
            <Button onClick={onClick}>
              {buttonTitle}
              {/*<Icon icon={'arrow'} type={IconType.Fill} />*/}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
