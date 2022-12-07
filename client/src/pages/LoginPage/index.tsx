import React from "react";
import MainContainer from "@components/MainContainer";
import Paper from "@components/design/Paper";
import GoogleOAuthButton from "@components/GoogleOAuthButton";
import logoSrc from "@public/images/fitory-logo.png";
import * as s from "./style";

const LoginPage = () => {
  return (
    <MainContainer isRoot={false}>
      <s.Background>
        <s.Logo src={logoSrc} alt="Fitory 로고" />
        <Paper style={{ width: "80%" }}>
          <s.Wrapper>
            <s.Title>로그인</s.Title>
            <GoogleOAuthButton />
          </s.Wrapper>
        </Paper>
      </s.Background>
    </MainContainer>
  );
};

export default LoginPage;
