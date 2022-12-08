import React from "react";
import textLogoSrc from "@public/images/img_logo_text.webp";
import BackButton from "@components/BackButton";
import * as s from "./style";

export interface TopNavigationBarProps {
  isRoot: boolean;
  title?: string;
  rightItem?: JSX.Element;
  onClickBackButton?: () => void;
}

const TopNavigationBar = ({
  isRoot,
  title,
  rightItem,
  onClickBackButton,
}: TopNavigationBarProps) => {
  return (
    <s.Wrapper>
      <s.Content>
        <s.LeftItem>{!isRoot && <BackButton onClick={onClickBackButton} />}</s.LeftItem>
        <s.Title>{isRoot ? <img src={textLogoSrc} alt="로고" /> : <h1>{title}</h1>}</s.Title>
        <s.RightItem>{rightItem}</s.RightItem>
      </s.Content>
    </s.Wrapper>
  );
};

export default TopNavigationBar;
