import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";
import Loading from "@components/Loading";
import "react-toastify/dist/ReactToastify.css";

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
      <Suspense fallback={<Loading />}>
        <MainContainer isRoot={isRoot}>{children}</MainContainer>
      </Suspense>
      {isRoot && <BottomNavigationBar />}
      <ToastContainer position="bottom-center" style={{ bottom: "50px" }} />
    </>
  );
};

export default PageTemplate;
