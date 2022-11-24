import React from "react";
import { Meta, Story } from "@storybook/react";
import TopNavigationBar, { TopNavigationBarProps } from "../components/TopNavigationBar";

export default {
  title: "components/TopNavigationBar",
  component: TopNavigationBar,
} as Meta;

const Template: Story<TopNavigationBarProps> = (args: TopNavigationBarProps) => (
  <TopNavigationBar {...args} />
);

export const Root = Template.bind({});
Root.args = { isRoot: true };

export const Root2 = Template.bind({});
Root2.args = { isRoot: true, rightItem: <button type="button">버튼</button> };

export const Depth = Template.bind({});
Depth.args = { title: "제목", isRoot: false };

export const Depth2 = Template.bind({});
Depth2.args = { title: "제목", isRoot: false, rightItem: <button type="button">버튼</button> };
