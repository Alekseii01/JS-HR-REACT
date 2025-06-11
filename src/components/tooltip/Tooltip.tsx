import React, { ReactNode } from "react";
import style from "./Tooltip.module.scss";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "top" }) => {
  return (
    <span className={style.tooltipWrapper}>
      {children}
      <span className={`${style.tooltip} ${style[position]}`}>{text}</span>
    </span>
  );
};

export default Tooltip;