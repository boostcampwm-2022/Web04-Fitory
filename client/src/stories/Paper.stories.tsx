import React from "react";
import { Meta, Story } from "@storybook/react";
import Paper, { PaperProps } from "../common/design/Paper";

export default {
  title: "components/design/Paper",
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args: PaperProps) => <Paper {...args} />;
const children = <div style={{ width: "300px", height: "300px" }} />;

export const defaultPaper = Template.bind({});
defaultPaper.args = { children };

export const weakShadowPaper = Template.bind({});
weakShadowPaper.args = { children, shadow: 2 };

export const strongShadowPaper = Template.bind({});
strongShadowPaper.args = { children, shadow: 4 };
