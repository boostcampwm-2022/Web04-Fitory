import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { RoutePath } from "@constants/enums";

const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RoutePath.LOGIN, { replace: true });
  }, [navigate]);

  return (
    <PageTemplate isRoot>
      <div>Profile</div>
    </PageTemplate>
  );
};

export default ProfilePage;
