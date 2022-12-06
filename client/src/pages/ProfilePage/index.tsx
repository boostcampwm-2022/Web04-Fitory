import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { RoutePath } from "@constants/enums";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageUserIntroduce from "@components/MyPageUserIntroduce";
import MyPageSubInfoContainer from "@components/MyPageSubInfoContainer";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfilePage = () => {
  console.log(window.location.href);
  const navigate = useNavigate();
  const params = useParams();
  const profileUserId = parseInt(params.userid as string, 10);

  useEffect(() => {
    if (!authStorage.get()) {
      navigate(RoutePath.LOGIN, { replace: true });
    }
  }, [navigate]);

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
