import React from "react";
import s from "./style";

export interface CardsScrollerProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const CardsScroller = ({ style, children }: CardsScrollerProps) => {
  return <s.Wrapper style={style}>{children}</s.Wrapper>;
};

export default CardsScroller;
