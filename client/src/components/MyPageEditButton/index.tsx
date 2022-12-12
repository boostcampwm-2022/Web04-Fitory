import React, { useEffect, useState } from "react";
import UserAPI from "@api/UserAPI";
import { RoutePath } from "@constants/enums";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { UserInfo } from "../../types/user";

const MyPageEditButton = () => {
  const navigate = useNavigate();
  return (
    <s.Wrapper>
      <s.ProfileButton onClick={() => navigate(RoutePath.EDIT)}>마이페이지 수정</s.ProfileButton>
    </s.Wrapper>
  );
};

export default MyPageEditButton;
