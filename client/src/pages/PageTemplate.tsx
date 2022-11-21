import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";

interface PageTemplateProps {
  isRoot: boolean;
  children: React.ReactNode;
}

const PageTemplate = ({ isRoot, children }: PageTemplateProps) => {
  return (
    <>
      <TopNavigationBar isRoot={isRoot} />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default PageTemplate;
