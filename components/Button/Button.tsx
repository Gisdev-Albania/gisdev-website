import React, { SyntheticEvent } from "react";
import styles from "../../styles/components/Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: SyntheticEvent<HTMLElement>) => void;
  className?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, onClick, className } = props;
  return (
    <button onClick={onClick} className={`${styles.button} ${className} `}>
      <span>{children}</span>
    </button>
  );
};
