import Paper from "@components/design/Paper";
import React from "react";
import defaultImg from "@public/images/img_default_profile.png";
import * as s from "./styles";
import { SearchedUserInfo } from "../../types/user";

export const drawRecommendUserList = (userList: SearchedUserInfo[]) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = defaultImg;
    }
  };
  if (userList.length === 0) {
    return <s.Notice>* 나와 비슷한 친구가 없습니다.</s.Notice>;
  }
  return userList.map((user: SearchedUserInfo) => {
    return (
      <Paper key={user.user_id} style={{ padding: "10px", backgroundColor: "transparent" }}>
        <div style={{ width: "150px", height: "150px" }}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "fill" }}
            src={user.profile_image}
            onError={handleImgError}
            alt="유저 프로필 사진"
          />
        </div>
      </Paper>
    );
  });
};
