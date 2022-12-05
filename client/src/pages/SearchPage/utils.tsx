import Paper from "@components/design/Paper";
import React from "react";
import styled from "styled-components";
import { SearchedUserInfo } from "../../types/user";

export const drawRecommendUserList = (userList: any[]) => {
  if (userList.length === 0) {
    return <Notice>* 나와 비슷한 친구가 없습니다.</Notice>;
  }
  return userList.map((user: SearchedUserInfo) => {
    return (
      <Paper key={user.user_id}>
        <div style={{ width: "170px", height: "170px" }}>
          {/* <img src={user.user_profile} alt="유저 프로필 사진" /> */}
          <img
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
