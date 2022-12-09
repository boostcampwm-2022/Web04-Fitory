import { useQuery } from "react-query";
import UserAPI from "@api/UserAPI";
import { QueryKey } from "@constants/enums";
import { DEFAULT_STALE_TIME, NO_STALE_TIME } from "@constants/consts";
import { UserInfo, UserId } from "src/types/user";
import { authStorage } from "src/services/ClientStorage";

const useUserInfo = (userId: UserId) => {
  const { data } = useQuery([QueryKey.USER_INFO, userId], () => UserAPI.getUser(userId), {
    staleTime: userId === authStorage.get() ? DEFAULT_STALE_TIME : NO_STALE_TIME,
  });

  return { userInfo: data as UserInfo } as const;
};

export default useUserInfo;
