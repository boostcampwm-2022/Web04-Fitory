import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UserAPI from "@api/UserAPI";
import { RoutePath } from "@constants/enums";
import { UserInfo } from "src/types/user";

const useUserInfo = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("userInfo", () => UserAPI.getUser(), {
    suspense: true,
  });

  useEffect(() => {
    if (!isLoading && !data) {
      navigate(RoutePath.LOGIN, { replace: true });
    }
  }, [data, isLoading, navigate]);

  return { userInfo: data as UserInfo };
};

export default useUserInfo;
