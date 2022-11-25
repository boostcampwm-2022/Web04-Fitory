import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";

interface PageTemplateProps {
  isRoot: boolean;
  title?: string;
  disableBottomNavBar?: boolean;
  topNavRightItem?: JSX.Element;
  children: React.ReactNode;
}

const PageTemplate = ({
  isRoot,
  title,
  topNavRightItem,
  disableBottomNavBar,
  children,
}: PageTemplateProps) => {
  return (
    <>
      <TopNavigationBar title={title} isRoot={isRoot} rightItem={topNavRightItem} />
      <MainContainer disableBottomNavBar={disableBottomNavBar}>{children}</MainContainer>
      {!disableBottomNavBar && <BottomNavigationBar />}
    </>
  );
};

export default PageTemplate;
