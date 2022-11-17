import React from "react";
import * as s from "./style";

export interface ButtonProps {
  title: string;
  full?: boolean;
  small?: boolean;
}

const Button = ({ title, full, small }: ButtonProps) => {
  return (
    <s.Button type="button" full={full || false} small={small || false}>
      {title}
    </s.Button>
  );
};

export default Button;
