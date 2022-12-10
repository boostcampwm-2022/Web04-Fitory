import React, { useEffect, Suspense, useRef } from "react";
import { ToastContainer } from "react-toastify";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContainer from "@components/MainContainer";
import BottomNavigationBar from "@components/BottomNavigationBar";
import Loading from "@components/Loading";
import modalStore from "@stores/modalStore";
import { authStorage } from "src/services/ClientStorage";
import Exception from "src/services/Exception";
import "react-toastify/dist/ReactToastify.css";

interface PageTemplateProps {
  isRoot: boolean;
  title?: string;
  ignoreException?: boolean;
  topNavRightItem?: JSX.Element;
  onClickBackButton?: () => void;
  children: React.ReactNode;
}

const PageTemplate = ({
  isRoot,
  title,
  ignoreException,
  topNavRightItem,
  onClickBackButton,
  children,
}: PageTemplateProps) => {
  const { setModalRef } = modalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ignoreException && !authStorage.has()) {
      Exception.UserNotFound();
    }
  });

  useEffect(() => {
    setModalRef(modalRef);
  }, [setModalRef]);

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
      <div ref={modalRef} style={{ zIndex: 2 }} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default PageTemplate;
