import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { SearchedUserInfo } from "src/types/user";

const useAllUserList = () => {
  const { data } = useQuery(QueryKey.ALL_USER_LIST, () => UserAPI.getUserList(), {
    staleTime: 10000,
  });

  return { allUserList: data as SearchedUserInfo[] };
};

export default useAllUserList;
