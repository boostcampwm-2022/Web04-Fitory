import React from "react";
import MainContainer from "src/common/layer/MainContainer";
import * as s from "./style";

const Loading = () => {
  return (
    <MainContainer isRoot={false}>
      <s.Wrapper>
        <s.Spinner />
      </s.Wrapper>
    </MainContainer>
  );
};

export default Loading;
