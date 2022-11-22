import React from "react";
import * as s from "./style";

export interface ButtonProps {
  title: string;
  full?: boolean;
  small?: boolean;
  onClick?: () => void;
}

const Button = ({ title, full, small, onClick }: ButtonProps) => {
  return (
    <s.Button type="button" full={full || false} small={small || false} onClick={onClick}>
      {title}
    </s.Button>
  );
};

export default Button;
