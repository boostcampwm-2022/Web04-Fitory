import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";

const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    ({ accessToken }: { accessToken: string }) => {
      return UserAPI.googleLogin(accessToken);
    },
    {
      onSuccess: ({ needRegister }) => {
        if (needRegister) {
          navigate(RoutePath.JOIN);
          return;
        }
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
