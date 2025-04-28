import React from 'react';
import style from './LoadingBar.module.scss';

const LoadingBar = ({ variant = 'loaderSpinner' }) => {
  return <div className={`${style[variant]}`}></div>;
};

export default LoadingBar;