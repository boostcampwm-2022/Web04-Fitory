import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { authStorage } from "src/services/ClientStorage";

const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    ({ accessToken }: { accessToken: string }) => {
      return UserAPI.googleLogin({ access_token: accessToken });
    },
    {
      onSuccess: ({ userId, needRegister }, { accessToken }) => {
        authStorage.remove();
        if (needRegister) {
          navigate(RoutePath.JOIN, { state: { accessToken } });
          return;
        }
        authStorage.set(userId);
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
