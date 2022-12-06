import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { PageState, RoutePath } from "@constants/enums";
import MyPageUserProfile from "@components/MyPageUserProfile";
import { authStorage } from "../../services/ClientStorage";

const ProfilePage = () => {
  const navigate = useNavigate();
  const followerMove = () => {
    navigate("/follow", {
      state: PageState.FOLLOWER,
    });
  };

  const followingMove = () => {
    navigate("/follow", {
      state: PageState.FOLLOWING,
    });
  };
  // useEffect(() => {
  //   if (!authStorage.get()) {
  //     navigate(RoutePath.LOGIN, { replace: true });
  //   }
  // }, [navigate]);

  return (
    <PageTemplate isRoot>
      <MyPageUserProfile />
      <button onClick={followingMove}>
        <p>팔로잉</p>
      </button>
      <button onClick={followerMove}>
        <p>팔로워</p>
      </button>
    </PageTemplate>
  );
};

export default ProfilePage;
