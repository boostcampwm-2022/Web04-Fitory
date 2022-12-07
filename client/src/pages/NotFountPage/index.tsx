import React from "react";
import MainContainer from "@components/MainContainer";
import altLogoSrc from "@public/images/img_logo_alt.webp";
import * as s from "./style";

const NotFoundPage = () => {
  return (
    <MainContainer isRoot={false}>
      <s.Wrapper>
        <s.Logo src={altLogoSrc} alt="로고 이미지" />
        <s.Title>
          해당 페이지를 <span>찾을 수 없습니다.</span>
        </s.Title>
        <s.SubTitle>404 - Page is not Found</s.SubTitle>
        <s.HomeNavButton>홈으로 이동</s.HomeNavButton>
      </s.Wrapper>
    </MainContainer>
  );
};

export default NotFoundPage;
