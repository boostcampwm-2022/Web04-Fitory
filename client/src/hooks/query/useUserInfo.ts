import { useQuery } from "react-query";
import UserAPI from "@api/UserAPI";
import { QueryKey } from "@constants/enums";
import { UserInfo, UserId } from "src/types/user";

const useUserInfo = (userId: UserId) => {
  const { data } = useQuery([QueryKey.USER_INFO, userId], () => UserAPI.getUser(userId), {
    suspense: true,
  });

  return { userInfo: data as UserInfo } as const;
};

export default useUserInfo;
