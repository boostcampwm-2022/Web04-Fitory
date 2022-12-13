import { useQueryClient, useMutation } from "react-query";
import { QueryKey } from "@constants/enums";
import FollowAPI from "@api/FollowAPI";
import { authStorage } from "src/services/ClientStorage";

const useFollow = () => {
  const queryClient = useQueryClient();
  const myUserId = authStorage.get();

  const { mutate } = useMutation(
    (otherUserId: number) => FollowAPI.follow({ myUserId, otherUserId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.USER_INFO, myUserId]);
        queryClient.invalidateQueries(QueryKey.FOLLOWINGLIST);
      },
    },
  );

  return { follow: mutate };
};

export default useFollow;
