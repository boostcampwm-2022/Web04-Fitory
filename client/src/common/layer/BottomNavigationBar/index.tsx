import React from "react";
import homeIcon from "@public/icons/btn_home.svg";
import staticsIcon from "@public/icons/btn_statics.svg";
import searchIcon from "@public/icons/btn_search.svg";
import profileIcon from "@public/icons/btn_profile.svg";
import BottomNavigationButton from "src/common/layer/BottomNavigationBar/BottomNavigationButton";
import { RoutePath } from "@constants/enums";
import * as s from "./style";

const BottomNavigationBar = () => {
  return (
    <s.Wrapper>
      <s.Content>
        <BottomNavigationButton
          path={RoutePath.HOME}
          iconImageUrl={homeIcon}
          title="홈 화면 이동 아이콘"
        />
        <BottomNavigationButton
          path={RoutePath.STATISTICS}
          iconImageUrl={staticsIcon}
          title="통계 화면 이동 아이콘"
        />
        <BottomNavigationButton
          path={RoutePath.SEARCH}
          iconImageUrl={searchIcon}
          title="검색 화면 이동 아이콘"
        />
        <BottomNavigationButton
          path={RoutePath.PROFILE}
          iconImageUrl={profileIcon}
          title="프로필 화면 이동 아이콘"
        />
      </s.Content>
    </s.Wrapper>
  );
};

export default BottomNavigationBar;
