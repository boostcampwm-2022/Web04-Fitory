import React, { useEffect, useState } from "react";
import UserAPI from "@api/UserAPI";
import * as s from "./style";

interface MyPageButtonProp {
  userId: number;
  ownerId: number;
  isOwner: boolean;
}

const MyPageEditButton = ({ userId, ownerId, isOwner }: MyPageButtonProp) => {
  const [editState, setEditState] = useState(true);
  useEffect(() => {
    (async () => {
      console.log(ownerId);
      const ownerFollowList = await UserAPI.getFollowingUser(ownerId);
    })();
  }, [editState]);
  return (
    <s.Wrapper>
      <s.ProfileButton>{isOwner ? "마이페이지 수정" : "수정 완료"}</s.ProfileButton>
    </s.Wrapper>
  );
};

export default MyPageEditButton;
