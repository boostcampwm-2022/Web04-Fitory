import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { RoutePath } from "@constants/enums";

const GoogleOAuthButton = () => {
  const navigate = useNavigate();
  const handleSuccessLogin = ({ credential }: CredentialResponse) => {
    navigate(RoutePath.JOIN);
  };

  return <GoogleLogin onSuccess={handleSuccessLogin} useOneTap />;
};

export default GoogleOAuthButton;
