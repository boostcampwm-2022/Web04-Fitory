import React from "react";
import * as s from "./style";

export interface BottomNavigationButtonProps {
  path: string;
  iconImageUrl: string;
  title: string;
}

const BottomNavigationButton = ({ path, iconImageUrl, title }: BottomNavigationButtonProps) => {
  return (
    <s.LinkButton
      to={path}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
      replace
    >
      <img src={iconImageUrl} alt={title} />
    </s.LinkButton>
  );
};

export default BottomNavigationButton;
