import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import TopNavigationBar from "src/common/layer/TopNavigationBar";
import MainContainer from "src/common/layer/MainContainer";
import BottomNavigationBar from "src/common/layer/BottomNavigationBar";
import Loading from "src/common/layer/Loading";
import checkIsIOS from "@utils/checkIsIOS";
import checkIsPWADisplayMode from "@utils/checkIsPWADisplayMode";
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
      <ToastContainer
        theme="colored"
        position="bottom-center"
        style={{ bottom: `${checkIsIOS() && checkIsPWADisplayMode() ? "50px" : "0"}` }}
      />
    </>
  );
};

export default PageTemplate;
