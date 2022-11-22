import React from "react";
import cancelSrc from "@public/icons/btn_cancel.svg";
import * as s from "./style";

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <s.Overlay>
      <s.Window>
        <s.CloseButton>
          <img src={cancelSrc} alt="모달 닫기 버튼" />
        </s.CloseButton>
        {children}
      </s.Window>
    </s.Overlay>
  );
};

export default Modal;
