import React from "react";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const MyPageUserIntroduce = () => {
  const { userInfo } = useUserInfo(authStorage.get());

  return (
    <>
      <s.UserNameLabel>{userInfo.name}</s.UserNameLabel>
      <s.UserIntroduceContainer>{userInfo.introduce}</s.UserIntroduceContainer>
    </>
  );
};

export default MyPageUserIntroduce;
