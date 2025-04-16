import React from "react";
import style from "./Tooltip.module.scss";

export const Tooltip = ({ children, text, position = "top" }) => (
  <span className={style.tooltipWrapper}>
    {children}
    <span className={`${style.tooltip} ${style[position]}`}>{text}</span>
  </span>
);