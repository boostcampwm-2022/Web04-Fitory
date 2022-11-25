import React from "react";
import PageTemplate from "@pages/PageTemplate";
import useInputFocus from "@hooks/useInputFocus";
import * as s from "./style";

const NicknameTextField = () => {
  const TextFieldRef = useInputFocus();

  return (
    <>
      <s.TextField ref={TextFieldRef} placeholder="닉네임" />
      <s.Label>영문, 한글, 숫자 2~10자 이내</s.Label>
    </>
  );
};

const JoinPage = () => {
  return (
    <PageTemplate isRoot={false} disableBottomNavBar>
      <s.Wrapper>
        <s.Title>닉네임을 입력하세요.</s.Title>
        <s.ContentWrapper>
          <s.TextFieldWrapper>
            <NicknameTextField />
          </s.TextFieldWrapper>
          <s.Button>다음</s.Button>
        </s.ContentWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default JoinPage;
