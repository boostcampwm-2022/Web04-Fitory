import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { JoinUserInfo } from "src/types/user";
import { authStorage } from "src/services/ClientStorage";

const useJoinUser = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation((userInfo: JoinUserInfo) => UserAPI.join(userInfo), {
    onSuccess: ({ userId }) => {
      authStorage.set(userId);
      navigate(RoutePath.HOME, { replace: true });
    },
  });

  return { joinUser: mutate };
};

export default useJoinUser;
