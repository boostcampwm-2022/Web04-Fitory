import SearchResultUserProfile from "@components/SearchResultUserProfile";
import React from "react";
import styled from "styled-components";
import { SearchedUserInfo } from "../types/user";

export const drawSearchedUserList = (searchedUser: SearchedUserInfo[]) => {
  console.log(searchedUser);
  return searchedUser.map((user: SearchedUserInfo) => {
    return (
      <UserProfile key={user.user_user_id}>
        <SearchResultUserProfile userName={user.user_name} userMessage={user?.user_introduce} />
      </UserProfile>
    );
  });
};

const UserProfile = styled.div`
  padding: 5px 0;
  height: 10%;
  margin-bottom: 10px;
`;
