import React from "react";
import logoSrc from "@public/icons/logo.svg";
import * as s from "./style";
import BackButton from "../BackButton";

export interface TopNavigationBarProps {
  isRoot: boolean;
  title?: string;
  rightItem?: JSX.Element;
}

const TopNavigationBar = ({ isRoot, title, rightItem }: TopNavigationBarProps) => {
  return (
    <s.Wrapper>
      <s.Content>
        <s.LeftItem>{!isRoot && <BackButton />}</s.LeftItem>
        <s.Title>{isRoot ? <img src={logoSrc} alt="로고" /> : <h1>{title}</h1>}</s.Title>
        <s.RightItem>{rightItem}</s.RightItem>
      </s.Content>
    </s.Wrapper>
  );
};

export default TopNavigationBar;
