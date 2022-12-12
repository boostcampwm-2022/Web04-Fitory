import React, { useEffect } from "react";
import cancelSrc from "@public/icons/btn_cancel.svg";
import modalStore from "@stores/modalStore";
import * as s from "./style";

export interface ModalProps {
  modalKey: string;
  children: React.ReactNode;
}

const Modal = ({ modalKey: key, children }: ModalProps) => {
  const { modalList, setModalList, closeModal } = modalStore((state) => state);

  useEffect(() => {
    setModalList(key);
  }, [key, setModalList]);

  return (
    <s.Wrapper isShow={modalList[key]}>
      <s.Overlay onClick={closeModal} />
      <s.Window>
        <s.CloseButton onClick={closeModal}>
          <img src={cancelSrc} alt="모달 닫기 버튼" />
        </s.CloseButton>
        {children}
      </s.Window>
    </s.Wrapper>
  );
};

export default Modal;
