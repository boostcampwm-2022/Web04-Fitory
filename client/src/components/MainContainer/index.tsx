import React from "react";
import AppInstallPrompt from "@components/AppInstallPrompt";
import * as s from "./style";

interface MainContainerProps {
  isRoot: boolean;
  children: React.ReactNode;
}

const MainContainer = ({ isRoot, children }: MainContainerProps) => {
  return (
    <s.Background>
      <s.Wrapper isRoot={isRoot}>{children}</s.Wrapper>
      <AppInstallPrompt />
    </s.Background>
  );
};

export default MainContainer;
