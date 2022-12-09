import React from "react";
import UserAPI from "@api/UserAPI";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const LogoutButton = () => {
  const handleLogoutButton = async () => {
    await UserAPI.logout();
    authStorage.remove();
    window.location.reload();
  };

  return (
    <s.Wrapper>
      <s.Button onClick={handleLogoutButton}>로그아웃</s.Button>
    </s.Wrapper>
  );
};

export default LogoutButton;
