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
Root.args = { title: "Fitory" };
