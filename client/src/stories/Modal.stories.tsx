import React from "react";
import { Meta, Story } from "@storybook/react";
import Modal, { ModalProps } from "@components/design/Modal";

export default {
  title: "components/design/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;
const children = <div>모달 테스트</div>;

export const defaultModal = Template.bind({});
defaultModal.args = { children };
