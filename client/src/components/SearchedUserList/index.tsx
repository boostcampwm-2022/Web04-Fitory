import SearchResultUserProfile from "@components/SearchResultUserProfile";
import React from "react";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";

const SearchedUserList = (searchedUser: SearchedUserInfo[]) => {
  return searchedUser.map((user: SearchedUserInfo) => {
    let keyValue = user.user_id;
    if (user.follower_id) keyValue = user.follower_id;
    else if (user.followed_id) keyValue = user.followed_id;

    return (
      <s.UserProfile key={keyValue}>
        <SearchResultUserProfile
          userName={user.name}
          userMessage={user?.introduce}
          profileId={keyValue}
        />
      </s.UserProfile>
    );
  });
};

export default SearchedUserList;
