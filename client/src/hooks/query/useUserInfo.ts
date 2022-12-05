import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UserAPI from "@api/UserAPI";
import { RoutePath, QueryKey } from "@constants/enums";
import { UserInfo, UserId } from "src/types/user";

const useUserInfo = (userId: UserId) => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    [QueryKey.USER_INFO, userId],
    () => UserAPI.getUser(userId),
    {
      suspense: true,
    },
  );

  useEffect(() => {
    if (!isLoading && !data) {
      navigate(RoutePath.LOGIN, { replace: true });
    }
  }, [data, isLoading, navigate]);

  return { userInfo: data as UserInfo };
};

export default useUserInfo;
