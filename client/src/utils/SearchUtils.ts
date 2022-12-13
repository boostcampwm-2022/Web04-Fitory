import React from "react";
import UserAPI from "@api/UserAPI";
import { SearchedUserInfo } from "../types/user";

const SearchUtils = {
  searchEvent: (
    word: string,
    userList: SearchedUserInfo[],
    setSearchedUser: (searchResult: SearchedUserInfo[]) => void,
  ) => {
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
    userList: SearchedUserInfo[],
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const debounce = setTimeout(() => {
      if (searchValue) SearchUtils.searchEvent(searchValue, userList, setSearchedUser);
      else setSearchedUser([]);
    }, 250);
    return () => {
      clearTimeout(debounce);
    };
  },

  searchUser: (
    searchValue: string,
    userList: SearchedUserInfo[],
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const timer = setTimeout(() => {
      setSearchedUser(SearchUtils.searchEvent(searchValue, userList, setSearchedUser));
    }, 500);
    return () => clearTimeout(timer);
  },

  searchUserByKeyword: (
    searchValue: string,
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const timer = setTimeout(async () => {
      let userList: SearchedUserInfo[] = [];
      if(searchValue) userList = await UserAPI.searchUserByKeyword({ userName: searchValue }) as SearchedUserInfo[];
      else userList = [];
      if(!userList) return setSearchedUser([]);
      return setSearchedUser(userList);
    }, 500);
    return () => clearTimeout(timer);
  },
};

export default SearchUtils;
