import { useMutation } from "react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { authStorage } from "src/services/ClientStorage";
import { JoinUserInfo } from "src/types/user";

const useJoinUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate } = useMutation((userInfo: JoinUserInfo) => UserAPI.join(userInfo), {
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        authStorage.set(location.state.id);
        navigate(RoutePath.HOME, { replace: true });
      }
    },
  });

  return { joinUser: mutate };
};

export default useJoinUser;
