import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { RoutePath } from "@constants/enums";

const ProfilePage = () => {
  const isLogin = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(RoutePath.LOGIN);
    }
  }, [isLogin, navigate]);

  return (
    <PageTemplate isRoot>
      <div>Profile</div>
    </PageTemplate>
  );
};

export default ProfilePage;
