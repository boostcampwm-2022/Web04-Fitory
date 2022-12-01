import SearchResultUserProfile from "@components/SearchResultUserProfile";
import React from "react";
import styled from "styled-components";
import { SearchedUserInfo } from "../types/user";

export const drawSearchedUserList = (searchedUser: SearchedUserInfo[]) => {
  return searchedUser.map((user: SearchedUserInfo) => {
    // const keyValue = user.follower_id ? user.follower_id : user.user_id;
    let keyValue;
    if (user.follower_id) keyValue = user.follower_id;
    else if (user.user_id) keyValue = user.user_id;
    else if (user.followed_id) keyValue = user.followed_id;
    return (
      <UserProfile key={keyValue}>
        <SearchResultUserProfile userName={user.name} userMessage={user?.introduce} />
      </UserProfile>
    );
  });
};

const UserProfile = styled.div`
  padding: 5px 0;
  height: 10%;
  margin-bottom: 10px;
`;
