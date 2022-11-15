import React from "react";
import homeIcon from "@public/icon/homeIcon.svg";
import staticsIcon from "@public/icon/staticsIcon.svg";
import searchIcon from "@public/icon/searchIcon.svg";
import profileIcon from "@public/icon/profileIcon.svg";
import * as s from "./style";

export default function BottomNavigationBar() {
  return (
    <s.Wrapper>
      <s.NavigationButton>
        <img src={homeIcon} alt="메인 화면 이동 아이콘" />
      </s.NavigationButton>
      <s.NavigationButton>
        <img src={staticsIcon} alt="통계 화면 이동 아이콘" />
      </s.NavigationButton>
      <s.NavigationButton>
        <img src={searchIcon} alt="검색 화면 이동 아이콘" />
      </s.NavigationButton>
      <s.NavigationButton>
        <img src={profileIcon} alt="프로필 화면 이동 아이콘" />
      </s.NavigationButton>
    </s.Wrapper>
  );
}
