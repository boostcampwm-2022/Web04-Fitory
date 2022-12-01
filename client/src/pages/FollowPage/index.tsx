import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import { useLocation } from "react-router-dom";

import { PageState } from "@constants/enums";
import axios from "axios";
import { SearchedUserInfo } from "../../types/user";

const FollowPage = () => {
  const location = useLocation();
  const pageState = location.state as string;
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const REQUEST_URL =
      pageState === PageState.FOLLOWER
        ? `${process.env.SERVER_BASE_URL}follow/follower?userId=1`
        : `${process.env.SERVER_BASE_URL}follow/following?userId=1`;

    const getUserList = async () => {
      await axios.get(REQUEST_URL).then((response) => {
        if (pageState === PageState.FOLLOWER) {
          return console.log(response.data.response.followerUserProfileList);
        }
        return console.log(response.data.response.followingUserProfileList);
      });
    };
    getUserList();
  }, []);

  return (
    <PageTemplate isRoot={false} title={pageState}>
      <p>{pageState}</p>
    </PageTemplate>
  );
};

export default FollowPage;
