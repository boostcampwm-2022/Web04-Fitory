import React from "react";
import useGoogleLogin from "@hooks/query/useGoogleLogin";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

const GoogleOAuthButton = () => {
  const { googleLogin } = useGoogleLogin();

  const handleSuccessLogin = ({ credential }: CredentialResponse) => {
    if (credential) {
      googleLogin({ accessToken: credential });
    }
  };

  return <GoogleLogin onSuccess={handleSuccessLogin} useOneTap />;
};

export default GoogleOAuthButton;
