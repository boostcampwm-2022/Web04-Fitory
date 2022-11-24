import React from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

const GoogleOAuthButton = () => {
  const handleSuccessLogin = ({ credential }: CredentialResponse) => {};

  return <GoogleLogin onSuccess={handleSuccessLogin} useOneTap />;
};

export default GoogleOAuthButton;
