import React from "react";
import s from "./style";

export interface PaperProps {
  shadow?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}

const Paper = ({ shadow, children }: PaperProps) => {
  return <s.Wrapper shadow={shadow || 0}>{children}</s.Wrapper>;
};

export default Paper;
