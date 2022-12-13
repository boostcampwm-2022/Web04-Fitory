import React, { useEffect } from "react";
import cancelSrc from "@public/icons/btn_cancel.svg";
import modalStore from "@stores/modalStore";
import * as s from "./style";

export interface ModalProps {
  modalKey: string;
  isCenter?: boolean;
  children: React.ReactNode;
}

const Modal = ({ modalKey, isCenter, children }: ModalProps) => {
  const { modalList, setModalList, closeModal } = modalStore((state) => state);

  useEffect(() => {
    setModalList(modalKey);
  }, [modalKey, setModalList]);

  return (
    <s.Wrapper isCenter={Boolean(isCenter)} isShow={modalList[modalKey]}>
      <s.Overlay onClick={closeModal} />
      <s.Window isCenter={Boolean(isCenter)}>
        <s.CloseButton onClick={closeModal}>
          <img src={cancelSrc} alt="모달 닫기 버튼" />
        </s.CloseButton>
        {children}
      </s.Window>
    </s.Wrapper>
  );
};

export default Modal;
