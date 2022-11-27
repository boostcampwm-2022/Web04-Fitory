import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import SearchResultUserProfile from "@components/SearchResultUserProfile";
import axios from "axios";
import { SearchedUserInfo } from "src/types/user";
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

  const drawUserList = () => {
    return searchedUser.map((user: SearchedUserInfo) => {
      return (
        <s.UserProfile key={user.user_user_id}>
          <SearchResultUserProfile userName={user.user_name} userMessage={user?.user_introduce} />
        </s.UserProfile>
      );
    });
  };

  return (
    <PageTemplate isRoot>
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
          {drawUserList()}
        </s.SearchResultContainer>
      </s.SearchContainer>
    </PageTemplate>
  );
};

export default SearchPage;
