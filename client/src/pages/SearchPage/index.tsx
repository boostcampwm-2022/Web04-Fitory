import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import axios from "axios";
import { SearchedUserInfo } from "src/types/user";
import CardsScroller from "@components/design/CardsScroller";
import SearchUtils from "@utils/SearchUtils";
import { drawSearchedUserList } from "@utils/drawSearchedUserList";
import * as s from "./styles";
import { drawRecommendUserList } from "./utils";

const SearchPage = () => {
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const url = `${process.env.SERVER_BASE_URL}${process.env.GET_USERLIST_API}`;
    const getUserList = async () => {
      await axios.get(url).then((response) => {
        setUserList(response.data.response.userProfileList);
      });
    };
    getUserList();
  }, []);

  useEffect(() => {
    SearchUtils.searchUserDebounce(searchValue, userList, setSearchedUser);
  }, [searchValue]);

  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <s.SearchContainer isText={searchValue.length !== 0}>
          <s.UserSearchBarContainer>
            <s.SearchBar
              type="searchValue"
              onChange={handleChange}
              isText={searchValue.length !== 0}
              placeholder="검색어를 입력하세요."
            />
            <img src={searchIcon} alt="검색 아이콘" />
          </s.UserSearchBarContainer>
          <s.SearchResultContainer isText={searchValue.length !== 0}>
            {drawSearchedUserList(searchedUser)}
          </s.SearchResultContainer>
        </s.SearchContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 체급</s.RecommendLabel>
          <CardsScroller>{drawRecommendUserList(userList)}</CardsScroller>
        </s.RecommendListContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 나이</s.RecommendLabel>
          <CardsScroller>{drawRecommendUserList(userList)}</CardsScroller>
        </s.RecommendListContainer>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default SearchPage;
