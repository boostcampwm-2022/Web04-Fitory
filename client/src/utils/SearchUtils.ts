import React from "react";
import { SearchedUserInfo } from "../types/user";

const SearchUtils = {
  searchEvent: (word: string, userList: any[], setSearchedUser: any) => {
    const searchResult: SearchedUserInfo[] = userList.filter((user: SearchedUserInfo) => {
      return user.user_name.includes(word);
    });
    setSearchedUser(searchResult);
    return userList.filter((user: SearchedUserInfo) => user.user_name.includes(word));
  },
  searchUserDebounce: (
    searchValue: string,
    userList: any[],
    setSearchedUser: React.Dispatch<React.SetStateAction<SearchedUserInfo[]>>,
  ) => {
    const debounce = setTimeout(() => {
      if (searchValue.length !== 0) SearchUtils.searchEvent(searchValue, userList, setSearchedUser);
      else setSearchedUser([]);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  },
};

export default SearchUtils;
