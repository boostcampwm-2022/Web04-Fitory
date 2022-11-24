import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import styled from "styled-components";
import searchIcon from "@public/icons/btn_search.svg";
import Theme from "@styles/Theme";
import SearchResultUserProfile from "@components/SearchResultUserProfile";

interface userProps {
  id: number;
  name: string;
  introduce: string;
}
const SearchPage = () => {
  const mockData = [
    { id: 1, name: "최시운", introduce: "하이" },
    { id: 2, name: "최지원", introduce: "난 아니야" },
  ];

  const [text, setText] = useState<string>("");
  const [isText, setIsText] = useState(false);

  // Zustand 대체 코드
  const [store, setStore] = useState([]);
  // 목데이터 유틸 함수 (tmp)
  const searchEvent = (word: string) => {
    const tmp = mockData.filter((user: { name: string; introduce: string }) =>
      user.name.includes(word),
    );
    setStore(tmp);
    return mockData.filter((user: { name: string; introduce: string }) => user.name.includes(word));
  };

  const dispatchResetStore = () => {
    setStore([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    const textLength: number = e.target.value.length;
    if (textLength > 0) return setIsText(true);
    return setIsText(false);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (isText) searchEvent(text);
      else dispatchResetStore();
    }, 200);
    return () => {
      console.log("clear");
      clearTimeout(debounce);
    };
  }, [text]);

  const t = () => {
    return store.map((user: object) => {
      return (
        <SearchResultUserProfile key={user.id} userName={user.name} userMessage={user.introduce} />
      );
    });
  };

  return (
    <PageTemplate isRoot={false}>
      <SearchContainer isText={isText}>
        <UserSearchBarContainer>
          <SearchBar
            type="text"
            onChange={handleChange}
            isText={isText}
            placeholder="검색어를 입력하세요."
          />
          <img src={searchIcon} alt="검색 아이콘" />
        </UserSearchBarContainer>
        <SearchResultContainer>{t()}</SearchResultContainer>
      </SearchContainer>
    </PageTemplate>
  );
};

export default SearchPage;

const SearchContainer = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: ${({ isText }: { isText: boolean }) => {
    return isText ? "70vh" : "50px";
  }};
  padding: 0.5rem 5vw;
  transition: 0.25s all;
`;

const UserSearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({ theme, isText }: { theme: typeof Theme; isText: boolean }) => {
    return isText ? `1px solid ${theme.COLORS.LIGHT_GRAY}` : "none";
  }};
`;

const SearchResultContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: 1s all;
`;
