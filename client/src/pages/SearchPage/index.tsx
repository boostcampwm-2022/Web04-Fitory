import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import searchIcon from "@public/icons/btn_search.svg";
import { SearchedUserInfo } from "src/types/user";
import CardsScroller from "@components/design/CardsScroller";
import SearchUtils from "@utils/SearchUtils";
import UserAPI from "@api/UserAPI";
import SearchedUserList from "@components/SearchedUserList";
import defaultImg from "@public/images/img_default_profile.png";
import Paper from "@components/design/Paper";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";

const SearchPage = () => {
  const [userList, setUserList] = useState<SearchedUserInfo[]>([]);
  const [recommendAgeUserList, setRecommendAgeUserList] = useState<SearchedUserInfo[]>([]);
  const [recommendWeightUserList, setRecommendWeightUserList] = useState<SearchedUserInfo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<SearchedUserInfo[]>([]);

  const navigation = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const drawRecommendUserList = (userInfoArray: SearchedUserInfo[]) => {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (e.target instanceof HTMLImageElement) {
        e.target.src = defaultImg;
      }
    };
    if (userInfoArray.length === 0) {
      return <s.Notice>* 나와 비슷한 친구가 없습니다.</s.Notice>;
    }
    return userInfoArray.map((user: SearchedUserInfo) => {
      const handleClickRecommendProfile = () => {
        return navigation(`/profile/${user.user_id}`);
      };
      return (
        <Paper key={user.user_id} style={{ padding: "10px", backgroundColor: "transparent" }}>
          <div onClick={handleClickRecommendProfile} style={{ width: "150px", height: "150px" }}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "fill" }}
              src={user.profile_image}
              onError={handleImgError}
              alt="유저 프로필 사진"
            />
          </div>
        </Paper>
      );
    });
  };

  useEffect(() => {
    (async () => {
      const [recommendWeight, recommendAge] =
        (await UserAPI.getRecommendUserList()) as SearchedUserInfo[][];
      setRecommendAgeUserList(recommendAge);
      setRecommendWeightUserList(recommendWeight);
      const allUserList = await UserAPI.getUserList();
      setUserList(allUserList as SearchedUserInfo[]);
    })();
  }, []);

  useEffect(() => {
    return SearchUtils.searchUser(searchValue, userList, setSearchedUser);
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
            {SearchedUserList(searchedUser)}
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
