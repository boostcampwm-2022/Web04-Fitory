import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";

const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    ({ accessToken }: { accessToken: string }) => {
      return UserAPI.googleLogin({ access_token: accessToken });
    },
    {
      onSuccess: ({ needRegister }, { accessToken }) => {
        if (needRegister) {
          navigate(RoutePath.JOIN, { state: { accessToken } });
          return;
        }
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
