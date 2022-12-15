import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import SearchedUserList from "@components/SearchedUserList";
import SearchUtils from "@utils/SearchUtils";
import { SearchedUserInfo } from "src/types/user";
import RecommandUserListContianer from "./RecommedUserList";
import * as s from "./styles";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    return SearchUtils.searchUserByKeyword(searchValue, setSearchedUser);
  }, [searchValue]);

  return (
    <s.SearchContainer isText={searchValue.length !== 0}>
      <s.UserSearchBarContainer>
        <img src={searchIcon} alt="검색 아이콘" />
        <s.SearchBar
          type="searchValue"
          onChange={handleChange}
          isText={searchValue.length !== 0}
          placeholder="검색어를 입력하세요."
        />
      </s.UserSearchBarContainer>
      <s.SearchResultContainer isText={searchValue.length !== 0}>
        <SearchedUserList searchedUser={searchedUser} />
      </s.SearchResultContainer>
    </s.SearchContainer>
  );
};

const SearchPage = () => {
  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <SearchContainer />
        <RecommandUserListContianer />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default SearchPage;
