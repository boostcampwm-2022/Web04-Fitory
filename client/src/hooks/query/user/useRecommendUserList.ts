import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { SearchedUserInfo } from "src/types/user";

const useRecommendUserList = () => {
  const { data } = useQuery(QueryKey.RECOMMAND_LIST, () => UserAPI.getRecommendUserList());
  return {
    recommendList: data as {
      recommendWeight: SearchedUserInfo[];
      recommendAge: SearchedUserInfo[];
    },
  };
};

export default useRecommendUserList;
