import ProfileImageContainer from "src/common/design/ProfileImageContainer";
import React from "react";
import { Story } from "@storybook/react";

export default {
  title: "components/ProfileImageContainer",
  component: ProfileImageContainer,
};

const Template: Story<{ isModified: boolean }> = (args: { isModified: boolean }) => (
  <ProfileImageContainer {...args} />
);

export const DefaultProfileImageContainer = Template.bind({});
DefaultProfileImageContainer.args = {
  isModified: false,
};

export const EditProfileImageContainer = Template.bind({});
DefaultProfileImageContainer.args = {
  isModified: true,
};
