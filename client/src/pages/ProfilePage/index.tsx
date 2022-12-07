import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageUserIntroduce from "@components/MyPageUserIntroduce";
import MyPageSubInfoContainer from "@components/MyPageSubInfoContainer";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfilePage = () => {
  useEffect(() => {
    (() => {})();
  });
  const { userid } = useParams();
  const profileUserId = userid ? parseInt(userid as string, 10) : authStorage.get();
  return (
    <PageTemplate isRoot>
      <s.MyProfileContainer>
        <MyPageUserProfile userId={profileUserId} />
        <MyPageUserIntroduce userId={profileUserId} />
        <MyPageSubInfoContainer userId={profileUserId} />
      </s.MyProfileContainer>
    </PageTemplate>
  );
};

export default ProfilePage;
