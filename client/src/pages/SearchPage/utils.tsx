import Paper from "@components/design/Paper";
import React from "react";
import styled from "styled-components";
import defaultImg from "@public/images/img_default_profile.png";
import { SearchedUserInfo } from "../../types/user";

export const drawRecommendUserList = (userList: any[]) => {
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };
  if (userList.length === 0) {
    return <Notice>* 나와 비슷한 친구가 없습니다.</Notice>;
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

const Notice = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  text-align: center;
  margin-top: 90px;
`;
