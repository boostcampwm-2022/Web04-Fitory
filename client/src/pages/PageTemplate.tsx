import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";

interface PageTemplateProps {
  isRoot: boolean;
  title?: string;
  disableBottomNavBar?: boolean;
  topNavRightItem?: JSX.Element;
  onClickBackButton?: () => void;
  children: React.ReactNode;
}

const PageTemplate = ({
  isRoot,
  title,
  topNavRightItem,
  disableBottomNavBar,
  onClickBackButton,
  children,
}: PageTemplateProps) => {
  return (
    <>
      <TopNavigationBar
        title={title}
        isRoot={isRoot}
        rightItem={topNavRightItem}
        onClickBackButton={onClickBackButton}
      />
      <MainContainer disableBottomNavBar={disableBottomNavBar}>{children}</MainContainer>
      {!disableBottomNavBar && <BottomNavigationBar />}
    </>
  );
};

export default PageTemplate;
