import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchResultUserProfile, {
  SearchResultUserProfileProps,
} from "@components/SearchResultUserProfile";

const Template: Story<SearchResultUserProfileProps> = (args: SearchResultUserProfileProps) => (
  <SearchResultUserProfile {...args} />
);

export default {
  title: "components/SearchResultUserProfile",
  component: SearchResultUserProfile,
} as Meta;

export const OnlyNameUser = Template.bind({});
OnlyNameUser.args = { userName: "최시운" };

export const NameAndMessageUser = Template.bind({});
NameAndMessageUser.args = { userName: "최시운", userMessage: "내 꿈은 3대 1200" };

export const fullInputUser = Template.bind({});
fullInputUser.args = {
  profileImgUrl:
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  userName: "최시운",
  userMessage: "내 꿈은 3대 1200",
};
