import React from "react";
import { Meta } from "@storybook/react";
import Modal from "@components/design/Modal";
import Button from "@components/design/Button";
import modalStore from "@stores/modalStore";

export default {
  title: "components/design/Modal",
  component: Modal,
} as Meta;

export const DefaultModal = () => {
  const openModal = modalStore((state) => state.openModal);
  return (
    <>
      <Button title="모달 열기" onClick={openModal} small />
      <div style={{ marginTop: "10px" }}>테스트 버튼입니다</div>
      <Modal>
        <div>모달 테스트</div>
      </Modal>
    </>
  );
};
