import React from "react";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";

const MyPageUserIntroduce = ({ userId, isOwner }: { userId: number; isOwner: boolean }) => {
  const { userInfo } = useUserInfo(userId);

  return (
    <>
      <s.UserNameLabel>{userInfo.name}</s.UserNameLabel>
      <s.UserIntroduceContainer>{userInfo.introduce}</s.UserIntroduceContainer>
    </>
  );
};

export default MyPageUserIntroduce;
