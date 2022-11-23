import React from "react";
import googleSignInSrc from "@public/images/btn_google_signin.png";
import * as s from "./style";

const GoogleOAuthButton = () => {
  return (
    <s.Button type="button">
      <img src={googleSignInSrc} alt="구글 로그인 버튼" />
    </s.Button>
  );
};

export default GoogleOAuthButton;
