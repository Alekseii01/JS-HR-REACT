import React from 'react';
import style from './LoadingBar.module.scss';
import { LoadingBarProps } from '../types/interface';

const LoadingBar: React.FC<LoadingBarProps> = ({variant = 'loaderSpinner' }) => {
  return <div className={`${style[variant]}`}></div>;
};

export default LoadingBar;