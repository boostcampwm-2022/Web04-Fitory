import React from "react";
import * as s from "./style";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <s.Wrapper>{children}</s.Wrapper>;
};

export default MainContainer;
