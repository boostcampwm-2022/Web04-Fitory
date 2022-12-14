import React from "react";
import MainContainer from "src/common/layer/MainContainer";
import altLogoSrc from "@public/images/img_logo_alt.webp";
import * as s from "./style";

const ErrorFallback = () => {
  return (
    <MainContainer isRoot={false}>
      <s.Wrapper>
        <s.Logo src={altLogoSrc} alt="로고 이미지" />
        <s.Title>
          앗! 예상치 못한 에러가 발생했어요.<span>다시 시도해보세요.</span>
        </s.Title>
        <s.SorryText>Sorry..😅</s.SorryText>
        <s.ReloadButton onClick={() => window.location.reload()}>새로고침</s.ReloadButton>
      </s.Wrapper>
    </MainContainer>
  );
};

export default ErrorFallback;
