import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import SearchResultUserProfile from "@components/SearchResultUserProfile";
import axios from "axios";
import { SearchedUserInfo } from "src/types/user";
import CardsScroller from "@components/design/CardsScroller";
import Paper from "@components/design/Paper";
import styled from "styled-components";
import * as s from "./styles";

const SearchPage = () => {
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>([]);

  const searchEvent = (word: string) => {
    const searchResult: SearchedUserInfo[] = userList.filter((user: SearchedUserInfo) => {
      return user.user_name.includes(word);
    });
    setSearchedUser(searchResult);
    return userList.filter((user: SearchedUserInfo) => user.user_name.includes(word));
  };
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
    const debounce = setTimeout(() => {
      if (searchValue.length !== 0) searchEvent(searchValue);
      else setSearchedUser([]);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue]);

  const drawSearchedUserList = () => {
    return searchedUser.map((user: SearchedUserInfo) => {
      return (
        <s.UserProfile key={user.user_user_id}>
          <SearchResultUserProfile userName={user.user_name} userMessage={user?.user_introduce} />
        </s.UserProfile>
      );
    });
  };

  const drawWeightRecommendUserList = () => {
    return userList.slice(0, 5).map((user: SearchedUserInfo) => {
      return (
        <Paper key={user.user_user_id}>
          <div style={{ width: "170px", height: "170px" }}>
            {/* <img src={user.user_profile} alt="유저 프로필 사진" /> */}
            <img
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="유저 프로필 사진"
            />
          </div>
        </Paper>
      );
    });
  };

  const drawAgeRecommendUserList = () => {
    return userList.slice(0, 5).map((user: SearchedUserInfo) => {
      return (
        <Paper key={user.user_user_id}>
          <div style={{ width: "170px", height: "170px" }}>
            {/* <img src={user.user_profile} alt="유저 프로필 사진" /> */}
            <img
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="유저 프로필 사진"
            />
          </div>
        </Paper>
      );
    });
  };

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
            {drawSearchedUserList()}
          </s.SearchResultContainer>
        </s.SearchContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 체급</s.RecommendLabel>
          <CardsScroller>{drawWeightRecommendUserList()}</CardsScroller>
        </s.RecommendListContainer>
        <s.RecommendListContainer>
          <s.RecommendLabel>나와 비슷한 나이</s.RecommendLabel>
          <CardsScroller>{drawAgeRecommendUserList()}</CardsScroller>
        </s.RecommendListContainer>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default SearchPage;
