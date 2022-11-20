import React from "react";
import * as s from "./style";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <s.Background>
      <s.Wrapper>{children}</s.Wrapper>
    </s.Background>
  );
};

export default MainContainer;
