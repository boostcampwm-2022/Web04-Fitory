import { useQueryClient, useMutation } from "react-query";
import { QueryKey } from "@constants/enums";
import FollowAPI from "@api/FollowAPI";
import { authStorage } from "src/services/ClientStorage";

const useUnfollow = () => {
  const queryClient = useQueryClient();
  const myUserId = authStorage.get();

  const { mutate } = useMutation(
    (otherUserId: number) => FollowAPI.unFollow({ myUserId, otherUserId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.USER_INFO, myUserId]);
        queryClient.invalidateQueries(QueryKey.FOLLOWINGLIST);
      },
    },
  );

  return { unfollow: mutate };
};

export default useUnfollow;
