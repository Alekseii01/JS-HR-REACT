import React, { Component } from "react";
import style from "./Tooltip.module.scss";

export class Tooltip extends Component {
  render() {
   const { children, text, position = "top" } = this.props;

    return (
      <span className={style.tooltipWrapper}>
        {children}
        <span className={`${style.tooltip} ${style[position]}`}>{text}</span>
      </span>
    );
  }
}