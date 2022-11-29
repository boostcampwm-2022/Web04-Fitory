import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/userAPI";

const GoogleOAuthButton = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation((accessToken: string) => UserAPI.googleLogin(accessToken), {
    onSuccess: (isExistingUser) => {
      console.log(isExistingUser);
      if (isExistingUser) {
        return;
      }
      navigate(RoutePath.JOIN);
    },
  });

  const handleSuccessLogin = ({ credential }: CredentialResponse) => {
    if (!credential) {
      return;
    }
    mutate(credential);
  };

  return <GoogleLogin onSuccess={handleSuccessLogin} useOneTap />;
};

export default GoogleOAuthButton;
