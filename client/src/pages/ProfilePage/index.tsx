import React from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import { PageState } from "@constants/enums";

const ProfilePage = () => {
  const isLogin = false;
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
  //   if (!isLogin) {
  //     navigate(RoutePath.LOGIN, { replace: true });
  //   }
  // }, [isLogin, navigate]);

  return (
    <PageTemplate isRoot>
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
