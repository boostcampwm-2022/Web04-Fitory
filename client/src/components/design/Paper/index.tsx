import React from "react";
import s from "./style";

export interface PaperProps {
  shadow?: 1 | 2 | 3 | 4 | 5;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Paper = ({ shadow, style, children }: PaperProps) => {
  return (
    <s.Wrapper shadow={shadow || 0} style={style}>
      {children}
    </s.Wrapper>
  );
};

export default Paper;
