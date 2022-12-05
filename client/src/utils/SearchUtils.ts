import React from "react";
import { SearchedUserInfo } from "../types/user";

const SearchUtils = {
  searchEvent: (word: string, userList: any[], setSearchedUser: any) => {
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
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  },
  // searchUserDebounce: (
  //   searchValue: string,
  //   userList: any[],
  //   setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  // ) => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     if (searchValue.length !== 0) SearchUtils.searchEvent(searchValue, userList, setSearchedUser);
  //     else setSearchedUser([]);
  //     console.log("hi");
  //   }, 200);
  // },
};

export default SearchUtils;
