import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PageState } from "@constants/enums";
import PageTemplate from "@pages/PageTemplate";
import SearchUtils from "@utils/SearchUtils";
import searchIcon from "@public/icons/btn_search.svg";
import SearchedUserList from "@components/SearchedUserList";
import UserAPI from "@api/UserAPI";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";
import { authStorage } from "../../services/ClientStorage";

const FollowPage = () => {
  const location = useLocation();
  const pageState = (location.state as string) || PageState.FOLLOWING;
  const [userList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>(userList);
  const { userId } = useParams();
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      if (pageState === PageState.FOLLOWER) {
        const searchedUserList = await UserAPI.getFollowerUser(profileUserId);
        setSearchedUser(searchedUserList as SearchedUserInfo[]);
      } else {
        const searchedUserList = await UserAPI.getFollowingUser(profileUserId);
        setSearchedUser(searchedUserList as SearchedUserInfo[]);
      }
    })();
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
            <img src={searchIcon} alt="검색 아이콘" />
            <s.SearchBar
              type="searchValue"
              onChange={handleChange}
              placeholder="검색어를 입력하세요."
            />
          </s.UserSearchBarContainer>
        </s.SearchContainer>
        {SearchedUserList(searchedUser)}
      </s.Wrapper>
    </PageTemplate>
  );
};

export default FollowPage;
