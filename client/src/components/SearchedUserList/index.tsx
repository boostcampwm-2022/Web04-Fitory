import React from "react";
import SearchResultUserProfile from "@components/SearchResultUserProfile";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";

const SearchedUserList = ({ searchedUser }: { searchedUser: SearchedUserInfo[] }) => {
  return (
    <>
      {searchedUser.map(({ user_id, follower_id, followed_id, name, introduce, profile_image }) => (
        <s.UserProfile key={follower_id || followed_id || user_id}>
          <SearchResultUserProfile
            profileImgUrl={profile_image}
            userName={name}
            userMessage={introduce}
            profileId={(follower_id || followed_id || user_id) as number}
          />
        </s.UserProfile>
      ))}
    </>
  );
};

export default SearchedUserList;
