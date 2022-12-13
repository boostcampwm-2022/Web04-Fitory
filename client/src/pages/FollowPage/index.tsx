/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PageState } from "@constants/enums";
import PageTemplate from "@pages/PageTemplate";
import SearchUtils from "@utils/SearchUtils";
import searchIcon from "@public/icons/btn_search.svg";
import SearchedUserList from "@components/SearchedUserList";
import useFollowUserList from "@hooks/query/follow/useFollowUserList";
import debounce from "@utils/debounce";
import * as s from "./style";
import { SearchedUserInfo } from "../../types/user";
import { authStorage } from "../../services/ClientStorage";

const FollowPage = () => {
  const location = useLocation();
  const { userId } = useParams();

  const pageState = (location.state as string) || PageState.FOLLOWING;
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();

  const { followList } = useFollowUserList(profileUserId, pageState === PageState.FOLLOWER);

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>(followList);

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, 250);

  useEffect(() => {
    if (searchValue === "") {
      setSearchedUser(followList);
      return;
    }
    SearchUtils.searchEvent(searchValue, followList, setSearchedUser);
  }, [searchValue, followList]);

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
        <SearchedUserList searchedUser={searchedUser} />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default FollowPage;
