import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { RoutePath } from "@constants/enums";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageUserIntroduce from "@components/MyPageUserIntroduce";
import MyPageSubInfoContainer from "@components/MyPageSubInfoContainer";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authStorage.get()) {
      navigate(RoutePath.LOGIN, { replace: true });
    }
  }, [navigate]);

  return (
    <PageTemplate isRoot>
      <s.MyProfileContainer>
        <MyPageUserProfile />
        <MyPageUserIntroduce />
        <MyPageSubInfoContainer />
      </s.MyProfileContainer>
    </PageTemplate>
  );
};

export default ProfilePage;
