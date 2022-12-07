import React from "react";
import { SearchedUserInfo } from "../types/user";

const SearchUtils = {
  searchEvent: (word: string, userList: any[], setSearchedUser: any) => {
    if (word.length === 0) {
      return [];
    }
    const searchResult: SearchedUserInfo[] = userList.filter((user: SearchedUserInfo) => {
      return user.name.includes(word);
    });
    setSearchedUser(searchResult);
    return searchResult;
  },
  searchUserDebounce: (
    searchValue: string,
    userList: any[],
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const debounce = setTimeout(() => {
      if (searchValue.length !== 0) SearchUtils.searchEvent(searchValue, userList, setSearchedUser);
      else setSearchedUser([]);
    }, 250);
    return () => {
      clearTimeout(debounce);
    };
  },

  searchUser: (
    searchValue: string,
    userList: any[],
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const timer = setTimeout(() => {
      setSearchedUser(SearchUtils.searchEvent(searchValue, userList, setSearchedUser));
    }, 500);
    return () => clearTimeout(timer);
  },
};

export default SearchUtils;
