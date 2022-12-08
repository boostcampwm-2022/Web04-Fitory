import React from "react";
import MainContainer from "@components/MainContainer";
import Paper from "@components/design/Paper";
import GoogleOAuthButton from "@components/GoogleOAuthButton";
import mainLogoSrc from "@public/images/img_logo_main.webp";
import textLogoSrc from "@public/images/img_logo_text.webp";
import * as s from "./style";

const LoginPage = () => {
  return (
    <MainContainer isRoot={false}>
      <s.Background>
        <s.Logo src={mainLogoSrc} alt="Fitory 메인 로고" />
        <Paper style={{ width: "80%" }}>
          <s.Wrapper>
            <s.TitleWrapper>
              <img src={textLogoSrc} alt="Fitory 텍스트 로고" />
              <s.Title>로그인</s.Title>
            </s.TitleWrapper>
            <GoogleOAuthButton />
          </s.Wrapper>
        </Paper>
      </s.Background>
    </MainContainer>
  );
};

export default LoginPage;
