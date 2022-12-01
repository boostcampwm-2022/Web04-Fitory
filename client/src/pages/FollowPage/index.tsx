import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import { useLocation } from "react-router-dom";
import { PageState } from "@constants/enums";
import axios from "axios";
import SearchUtils from "@utils/SearchUtils";
import searchIcon from "@public/icons/btn_search.svg";
import { drawSearchedUserList } from "@utils/drawSearchedUserList";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";

const FollowPage = () => {
  const location = useLocation();
  const pageState = location.state as string;
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>(userList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const REQUEST_URL =
      pageState === PageState.FOLLOWER
        ? `${process.env.SERVER_BASE_URL}follow/follower?userId=2`
        : `${process.env.SERVER_BASE_URL}follow/following?userId=3`;
    const getUserList = async () => {
      await axios.get(REQUEST_URL).then((response) => {
        if (pageState === PageState.FOLLOWER) {
          setSearchedUser(response.data.response.followerUserProfileList);
          return setUserList(response.data.response.followerUserProfileList);
        }
        setSearchedUser(response.data.response.followingUserProfileList);
        return setUserList(response.data.response.followingUserProfileList);
      });
    };
    getUserList();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      return setSearchedUser(userList);
    }
    return SearchUtils.searchUserDebounce(searchValue, userList, setSearchedUser);
  }, [searchValue]);

  return (
    <PageTemplate isRoot={false} title={pageState}>
      <s.Wrapper>
        <s.SearchContainer>
          <s.UserSearchBarContainer>
            <s.SearchBar
              type="searchValue"
              onChange={handleChange}
              isText={searchValue.length !== 0}
              placeholder="검색어를 입력하세요."
            />
            <img src={searchIcon} alt="검색 아이콘" />
          </s.UserSearchBarContainer>
        </s.SearchContainer>
        {drawSearchedUserList(searchedUser)}
      </s.Wrapper>
    </PageTemplate>
  );
};

export default FollowPage;
