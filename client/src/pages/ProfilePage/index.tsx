import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { RoutePath } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";

const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStorage.get()) {
      navigate(RoutePath.LOGIN, { replace: true });
    }
  }, [navigate]);

  return (
    <PageTemplate isRoot>
      <div>Profile</div>
    </PageTemplate>
  );
};

export default ProfilePage;
