import React from 'react';
import style from './LoadingBar.module.scss';

export interface LoadingBarProps {
  variant?: string; 
}

const LoadingBar: React.FC<LoadingBarProps> = ({variant = 'loaderSpinner' }) => {
  return <div className={`${style[variant]}`}></div>;
};

export default LoadingBar;