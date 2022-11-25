import React from "react";
import * as s from "./style";

interface MainContainerProps {
  disableBottomNavBar?: boolean;
  children: React.ReactNode;
}

const MainContainer = ({ disableBottomNavBar, children }: MainContainerProps) => {
  return (
    <s.Background>
      <s.Wrapper disableBottomNavBar={disableBottomNavBar || false}>{children}</s.Wrapper>
    </s.Background>
  );
};

export default MainContainer;
