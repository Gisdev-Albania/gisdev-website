import React, { SyntheticEvent } from 'react';
import styles from '../../styles/components/Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: SyntheticEvent<HTMLElement>) => void;
  className?: string | undefined | null;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const { children, onClick, className, isSecondary, isPrimary } = props;
  return (
    <a
      onClick={onClick}
      className={
        isPrimary === true ? styles.btn__primary : styles.btn__secondary
      }
    >
      <span>
        <span>
          <span>{children}</span>
        </span>
      </span>
    </a>
  );
};
