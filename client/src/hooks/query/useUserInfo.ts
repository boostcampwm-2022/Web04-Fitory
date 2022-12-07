import { useQuery } from "react-query";
import UserAPI from "@api/UserAPI";
import { QUERY_KEY } from "@constants/enums";
import { UserInfo, UserId } from "src/types/user";

const useUserInfo = (userId: UserId) => {
  const { data } = useQuery([QUERY_KEY.USER_INFO, userId], () => UserAPI.getUser(userId), {
    suspense: true,
  });

  return { userInfo: data as UserInfo };
};

export default useUserInfo;
