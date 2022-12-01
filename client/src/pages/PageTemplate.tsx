import React from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";

interface PageTemplateProps {
  isRoot: boolean;
  title?: string;
  topNavRightItem?: JSX.Element;
  onClickBackButton?: () => void;
  children: React.ReactNode;
}

const PageTemplate = ({
  isRoot,
  title,
  topNavRightItem,
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
      <MainContainer isRoot={isRoot}>{children}</MainContainer>
      {isRoot && <BottomNavigationBar />}
    </>
  );
};

export default PageTemplate;
