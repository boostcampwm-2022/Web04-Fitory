import React from "react";
import { createPortal } from "react-dom";
import cancelSrc from "@public/icons/btn_cancel.svg";
import modalStore from "@stores/modalStore";
import * as s from "./style";

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { modalRef, isShowModal, closeModal } = modalStore((state) => state);

  if (!modalRef || !modalRef.current) {
    return null;
  }

  return createPortal(
    <s.Wrapper isShow={isShowModal}>
      <s.Overlay onClick={closeModal} />
      <s.Window>
        <s.CloseButton onClick={closeModal}>
          <img src={cancelSrc} alt="모달 닫기 버튼" />
        </s.CloseButton>
        {children}
      </s.Window>
    </s.Wrapper>,
    modalRef.current,
  );
};

export default Modal;
