import React from "react";
import MainContainer from "@components/MainContainer";
import loadingLogoSrc from "@public/images/img_logo_loading.webp";
import * as s from "./style";

const Loading = ({ isLazy }: { isLazy?: boolean }) => {
  return (
    <MainContainer isRoot={false}>
      <s.Wrapper>
        {isLazy && <s.Logo src={loadingLogoSrc} alt="Fitory 로딩 로고" />}
        <s.Spinner />
      </s.Wrapper>
    </MainContainer>
  );
};

export default Loading;
