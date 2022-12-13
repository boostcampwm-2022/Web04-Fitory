import { useQueryClient, useMutation } from "react-query";
import UserAPI from "@api/UserAPI";
import { QueryKey } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import { UpdateUserInfo } from "src/types/user";

const useUserUpdate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (updatedUserInfo: UpdateUserInfo) => UserAPI.updateUserInfo(updatedUserInfo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.USER_INFO, authStorage.get()]);
      },
    },
  );

  return { updateUser: mutate };
};

export default useUserUpdate;
