import React, { Component } from 'react';
import style from './Button.module.scss';

export class Button extends Component {
  render() {
    const { children, onClick, variant = 'primary', size = 'medium' } = this.props;

    return (
      <button className={`${style.button} ${style[variant]} ${style[size]}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}