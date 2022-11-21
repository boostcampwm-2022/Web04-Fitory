import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";

interface PageTemplateProps {
  isRoot: boolean;
  topNavRightItem?: JSX.Element;
  children: React.ReactNode;
}

const PageTemplate = ({ isRoot, topNavRightItem, children }: PageTemplateProps) => {
  return (
    <>
      <TopNavigationBar isRoot={isRoot} rightItem={topNavRightItem} />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default PageTemplate;
