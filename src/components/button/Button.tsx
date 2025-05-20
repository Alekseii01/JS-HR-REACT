import React from 'react';
import style from './Button.module.scss';
import { ButtonProps } from '../types/interface'

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button className={`${style.button} ${style[variant]} ${style[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};