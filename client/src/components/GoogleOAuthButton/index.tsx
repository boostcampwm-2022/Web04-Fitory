import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import useGoogleLogin from "@hooks/query/useGoogleLogin";
import googleSignInSrc from "@public/images/btn_google_signin.png";
import * as s from "./style";

const GoogleOAuthButton = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
  const { googleLogin } = useGoogleLogin();

  const handleSuccessLogin = ({ accessToken }: GoogleLoginResponse) => {
    googleLogin({ accessToken });
  };

  useEffect(() => {
    gapi.load("client:googleOAuth", () => {
      gapi.client.init({ clientId: googleClientId, scope: "" });
    });
  });

  return (
    <GoogleLogin
      clientId={googleClientId}
      render={(renderProps) => (
        <s.Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img src={googleSignInSrc} alt="구글 로그인 버튼" />
        </s.Button>
      )}
      onSuccess={(response) => handleSuccessLogin(response as GoogleLoginResponse)}
    />
  );
};

export default GoogleOAuthButton;
