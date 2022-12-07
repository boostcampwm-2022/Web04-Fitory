import React, { useEffect } from "react";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";
import { authStorage } from "src/services/ClientStorage";
import Exception from "src/services/Exception";

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
  useEffect(() => {
    if (!authStorage.has()) {
      Exception.UserNotFound();
    }
  });

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
