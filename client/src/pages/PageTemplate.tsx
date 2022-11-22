import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";

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
      <BottomNavigationBar />
    </>
  );
};

export default PageTemplate;
