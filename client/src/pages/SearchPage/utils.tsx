import Paper from "@components/design/Paper";
import React from "react";
import { SearchedUserInfo } from "../../types/user";

export const drawRecommendUserList = (userList: any[]) => {
  return userList.map((user: SearchedUserInfo) => {
    return (
      <Paper key={user.user_user_id}>
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
