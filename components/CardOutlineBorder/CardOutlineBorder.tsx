import React from 'react';
import styles from '../../styles/components/CardOutlineBorder.module.scss';
import { ButtonProps } from '../Button/Button';

export const CardOutlineBorder: React.FunctionComponent<
  ButtonProps
> = props => {
  const { children } = props;
  return (
    <>
      <div className={styles.box}>
        <div className={styles.box__inner}>{children}</div>
      </div>
    </>
  );
};
