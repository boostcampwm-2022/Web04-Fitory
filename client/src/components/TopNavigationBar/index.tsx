import React from "react";
import * as s from "./style";

export interface TopNavigationBarProps {
  title: string;
  rightItem?: JSX.Element;
}

const TopNavigationBar = ({ title, rightItem }: TopNavigationBarProps) => {
  return (
    <s.Wrapper>
      <s.ContentWrapper>
        <div>뒤로가기 버튼</div>
        {title}
        {rightItem}
      </s.ContentWrapper>
    </s.Wrapper>
  );
};

export default TopNavigationBar;
