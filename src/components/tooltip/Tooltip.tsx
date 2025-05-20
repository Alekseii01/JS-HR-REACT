import React, { ReactNode } from "react";
import style from "./Tooltip.module.scss";
import { TooltipProps } from "../types/interface";

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "top" }) => {
  return (
    <span className={style.tooltipWrapper}>
      {children}
      <span className={`${style.tooltip} ${style[position]}`}>{text}</span>
    </span>
  );
};

export default Tooltip;