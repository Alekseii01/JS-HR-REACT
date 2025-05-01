import React, { Component } from 'react';
import style from './LoadingBar.module.scss';

export class LoadingBar extends Component {
  render() {
    const { variant = 'loaderSpinner' } = this.props; 

    return (
      <div className={`${style[variant]}`}></div>
    );
  }
}

export default LoadingBar;