import React from "react";
import style from "./Tooltip.module.scss";

const Tooltip = ({ children, text, position = "top" }) => {
  return (
    <span className={style.tooltipWrapper}>
      {children}
      <span className={`${style.tooltip} ${style[position]}`}>{text}</span>
    </span>
  );
};

export default Tooltip;