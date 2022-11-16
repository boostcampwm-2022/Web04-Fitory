import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/design/Button";

export default {
  title: "components/design/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = { title: "운동 기록하기" };

export const fullSmallButton = Template.bind({});
fullSmallButton.args = { title: "마이페이지 수정", full: true, small: true };
