import React, { useEffect } from "react";
import Modal from "@components/design/Modal";
import useAppInstall from "@hooks/useAppInstall";
import checkIsIOS from "@utils/checkIsIOS";
import checkIsPWADisplayMode from "@utils/getPWADisplayMode";
import modalStore from "@stores/modalStore";
import { ModalKey } from "@constants/enums";
import { IoShareOutline } from "@react-icons/all-files/io5/IoShareOutline";
import { appInstallPromptCookie } from "src/services/Cookie";
import * as s from "./style";

const AppInstallPrompt = () => {
  const { openModal, closeModal } = modalStore();
  const { installApp, isInstallPromptDeferred } = useAppInstall();

  const isShowPrompt = checkIsIOS() || isInstallPromptDeferred;

  const handleClickInstallDeferButton = () => {
    appInstallPromptCookie.set(true, { "max-age": 604800 });
    closeModal();
  };

  useEffect(() => {
    if (!checkIsPWADisplayMode() && !appInstallPromptCookie.get() && isShowPrompt) {
      openModal(ModalKey.APP_INSALL);
    }
  }, [isShowPrompt, openModal]);

  return (
    <Modal modalKey={ModalKey.APP_INSALL}>
      <s.Wrapper>
        <s.AppInstallWrapper>
          {isInstallPromptDeferred && (
            <>
              <s.AppInstallTitle>Fitory 앱을 설치하시겠습니까?</s.AppInstallTitle>
              <s.AppInstallButton onClick={installApp}>앱 설치</s.AppInstallButton>
            </>
          )}
          {checkIsIOS() && (
            <>
              <s.AppInstallTitle>iOS에서 Fitory 앱 설치 방법</s.AppInstallTitle>
              <s.iOSExplanation>
                Safari 브라우저에서
                <IoShareOutline
                  size={25}
                  color="#007AFF"
                  style={{ position: "relative", top: "4px" }}
                />
                을 탭하고 옵션 목록을 아래로 스크롤한 다음, <span>&apos;홈 화면에 추가&apos;</span>
                를 탭하세요.
              </s.iOSExplanation>
            </>
          )}
          <s.InstallDeferButton onClick={handleClickInstallDeferButton}>
            1주일 동안 보지 않기
          </s.InstallDeferButton>
        </s.AppInstallWrapper>
      </s.Wrapper>
    </Modal>
  );
};

export default AppInstallPrompt;
