import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import { SearchedUserInfo } from "src/types/user";
import CardsScroller from "@components/design/CardsScroller";
import SearchUtils from "@utils/SearchUtils";
import { drawSearchedUserList } from "@utils/drawSearchedUserList";
import UserAPI from "@api/UserAPI";
import * as s from "./styles";
import { drawRecommendUserList } from "./utils";

const SearchPage = () => {
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [recommendAgeUserList, setRecommendAgeUserList] = useState([]);
  const [recommendWeightUserList, setRecommendWeightUserList] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const [recommendWeight, recommendAge] = await UserAPI.getRecommendUserList();
      setRecommendAgeUserList(recommendAge);
      setRecommendWeightUserList(recommendWeight);
      const allUserList = await UserAPI.getUserList();
      setUserList(allUserList);
    })();
  }, []);

  useEffect(() => {
    SearchUtils.searchUserDebounce(searchValue, userList, setSearchedUser);
  }, [searchValue]);

  return (
    <PageTemplate isRoot>
      <s.Wrapper>
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
            {drawSearchedUserList(searchedUser)}
          </s.SearchResultContainer>
        </s.SearchContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 체급</s.RecommendLabel>
          <CardsScroller>{drawRecommendUserList(recommendWeightUserList)}</CardsScroller>
        </s.RecommendListContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 나이</s.RecommendLabel>
          <CardsScroller>{drawRecommendUserList(recommendAgeUserList)}</CardsScroller>
        </s.RecommendListContainer>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default SearchPage;
