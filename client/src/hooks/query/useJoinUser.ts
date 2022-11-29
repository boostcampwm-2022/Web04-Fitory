import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { JoinUserInfo } from "src/types/user";

const useJoinUser = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation((userInfo: JoinUserInfo) => UserAPI.join(userInfo), {
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        navigate(RoutePath.HOME, { replace: true });
      }
    },
  });

  return { joinUser: mutate };
};

export default useJoinUser;
