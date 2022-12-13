import { useQueryClient, useMutation } from "react-query";
import UserAPI from "@api/UserAPI";
import { QueryKey } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import { UpdateUserInfo } from "src/types/user";

const useUserUpdate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ name, age, gender, height, weight, introduce, profileImage }: UpdateUserInfo) => {
      const formData = new FormData();
      if (profileImage) {
        formData.append("images", profileImage);
      }
      formData.append("userId", authStorage.get().toString());
      formData.append("name", name);
      formData.append("age", age.toString());
      formData.append("gender", gender.toString());
      formData.append("height", height.toString());
      formData.append("weight", weight.toString());
      formData.append("introduce", introduce);
      return UserAPI.updateUserInfo(formData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.USER_INFO, authStorage.get()]).then(() => {
          window.location.reload();
        });
      },
    },
  );

  return { updateUser: mutate };
};

export default useUserUpdate;
