import React, { SyntheticEvent } from 'react';
import styles from '../../styles/components/Button.module.scss';
import { CgArrowLongRight } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';

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
    <>
      <a
        onClick={onClick}
        className={
          isPrimary === true ? styles.btn__primary : styles.btn__secondary
        }
      >
        <span>
          <span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
              className={styles.btn__style}
            >
              {children}

              <BsArrowRight
                style={{
                  color: isPrimary ? 'white' : '#0e1a2a',
                  marginLeft: '10px',
                }}
              />
            </span>
          </span>
        </span>
      </a>
    </>
  );
};
