import React from "react";
import RecommendUserCard from "@components/RecommendUserCard";
import * as s from "./styles";
import { SearchedUserInfo } from "../../types/user";

export const drawRecommendUserList = (userList: SearchedUserInfo[]) => {
  if (userList.length === 0) {
    return <s.Notice>* 나와 비슷한 친구가 없습니다.</s.Notice>;
  }
  return userList.map((user: SearchedUserInfo) => {
    return <RecommendUserCard user={user} />;
  });
};
