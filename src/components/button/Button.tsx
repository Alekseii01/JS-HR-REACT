import React from 'react';
import style from './Button.module.scss';
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: string;
  size?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button className={`${style.button} ${style[variant]} ${style[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};