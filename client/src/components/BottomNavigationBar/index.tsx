import React from "react";
import homeIcon from "@public/icons/btn_home.svg";
import staticsIcon from "@public/icons/btn_statics.svg";
import searchIcon from "@public/icons/btn_search.svg";
import profileIcon from "@public/icons/btn_profile.svg";
import * as s from "./style";

export default function BottomNavigationBar() {
  return (
    <s.Wrapper>
      <s.LinkButton to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <img src={homeIcon} alt="메인 화면 이동 아이콘" />
      </s.LinkButton>
      <s.LinkButton to="/statics" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <img src={staticsIcon} alt="통계 화면 이동 아이콘" />
      </s.LinkButton>
      <s.LinkButton to="/search" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <img src={searchIcon} alt="검색 화면 이동 아이콘" />
      </s.LinkButton>
      <s.LinkButton to="/profile" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <img src={profileIcon} alt="프로필 화면 이동 아이콘" />
      </s.LinkButton>
    </s.Wrapper>
  );
}
