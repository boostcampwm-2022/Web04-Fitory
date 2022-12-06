import React from "react";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";

const MyPageUserIntroduce = ({ userId }: { userId: number }) => {
  const { userInfo } = useUserInfo(userId);

  return (
    <>
      <s.UserNameLabel>{userInfo.name}</s.UserNameLabel>
      <s.UserIntroduceContainer>{userInfo.introduce}</s.UserIntroduceContainer>
    </>
  );
};

export default MyPageUserIntroduce;
