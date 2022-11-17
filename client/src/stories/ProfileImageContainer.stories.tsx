import { Meta } from "@storybook/react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import React from "react";

export default {
  title: "components/ProfileImageContainer",
  component: ProfileImageContainer,
} as Meta;

export const defaultProfileImageContainer = () => <ProfileImageContainer />;
