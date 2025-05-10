import React from 'react';
import style from './Button.module.scss';

export const Button = ({ children, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button className={`${style.button} ${style[variant]} ${style[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};