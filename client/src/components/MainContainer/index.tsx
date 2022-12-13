import React from "react";
import AppInstallPrompt from "@components/AppInstallPrompt";
import * as s from "./style";

interface MainContainerProps {
  isRoot: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const MainContainer = ({ isRoot, style, children }: MainContainerProps) => {
  return (
    <s.Background>
      <s.Wrapper style={style} isRoot={isRoot}>
        {children}
      </s.Wrapper>
      <AppInstallPrompt />
    </s.Background>
  );
};

export default MainContainer;
