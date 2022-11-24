import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import SearchResultUserProfile from "@components/SearchResultUserProfile";
import axios from "axios";
import * as s from "./styles";

interface userProps {
  user_user_id?: number;
  user_name: string;
  user_introduce?: string;
}
const SearchPage = () => {
  const [userList, setUserList] = useState<userProps[]>([]);
  const [text, setText] = useState<string>("");
  const [store, setStore] = useState<userProps[]>([]);

  const searchEvent = (word: string) => {
    const searchResult: userProps[] = userList.filter((user: userProps) => {
      return user.user_name.includes(word);
    });
    setStore(searchResult);
    return userList.filter((user: userProps) => user.user_name.includes(word));
  };

  const resetStore = () => {
    setStore([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
      if (text.length !== 0) searchEvent(text);
      else resetStore();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [text]);

  const drawUserList = () => {
    return store.map((user: userProps) => {
      return (
        <s.UserProfile key={user.user_user_id}>
          <SearchResultUserProfile userName={user.user_name} userMessage={user?.user_introduce} />
        </s.UserProfile>
      );
    });
  };

  return (
    <PageTemplate isRoot={false}>
      <s.SearchContainer isText={text.length !== 0}>
        <s.UserSearchBarContainer>
          <s.SearchBar
            type="text"
            onChange={handleChange}
            isText={text.length !== 0}
            placeholder="검색어를 입력하세요."
          />
          <img src={searchIcon} alt="검색 아이콘" />
        </s.UserSearchBarContainer>
        <s.SearchResultContainer isText={text.length !== 0}>
          {drawUserList()}
        </s.SearchResultContainer>
      </s.SearchContainer>
    </PageTemplate>
  );
};

export default SearchPage;
