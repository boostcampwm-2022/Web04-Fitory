import React from "react";
import GoogleLogin from "react-google-login";
import googleSignInSrc from "@public/images/btn_google_signin.png";
import * as s from "./style";

const GoogleCustomButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <s.Button type="button" onClick={onClick}>
      <img src={googleSignInSrc} alt="구글 로그인 버튼" />
    </s.Button>
  );
};

const GoogleOAuthButton = () => {
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID as string}
      render={({ onClick }) => <GoogleCustomButton onClick={onClick} />}
    />
  );
};

export default GoogleOAuthButton;
