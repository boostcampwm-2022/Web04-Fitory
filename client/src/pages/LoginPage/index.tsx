import React from "react";
import PageTemplate from "@pages/PageTemplate";
import Paper from "@components/design/Paper";
import GoogleOAuthButton from "@components/GoogleOAuthButton";
import * as s from "./style";

const LoginPage = () => {
  return (
    <PageTemplate isRoot>
      <s.Background>
        <Paper style={{ width: "100%" }}>
          <s.Wrapper>
            <s.Title>로그인</s.Title>
            <GoogleOAuthButton />
          </s.Wrapper>
        </Paper>
      </s.Background>
    </PageTemplate>
  );
};

export default LoginPage;
