import SearchResultUserProfile from "@components/SearchResultUserProfile";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";

const SearchedUserList = (searchedUser: SearchedUserInfo[]) => {
  const navigate = useNavigate();
  return searchedUser.map((user: SearchedUserInfo) => {
    const handleClickEvent = () => {
      navigate(`${RoutePath.PROFILE}/${user.user_id}`);
    };
    let keyValue;
    if (user.follower_id) keyValue = user.follower_id;
    else if (user.user_id) keyValue = user.user_id;
    else if (user.followed_id) keyValue = user.followed_id;
    return (
      <s.UserProfile key={keyValue} onClick={handleClickEvent}>
        <SearchResultUserProfile userName={user.name} userMessage={user?.introduce} />
      </s.UserProfile>
    );
  });
};

export default SearchedUserList;
