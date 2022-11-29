import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";
import { authStorage } from "src/services/ClientStorage";

const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    ({ accessToken }: { accessToken: string }) => {
      return UserAPI.googleLogin(accessToken);
    },
    {
      onSuccess: ({ id, validate }) => {
        if (!validate) {
          navigate(RoutePath.JOIN, { state: { id } });
          return;
        }
        authStorage.set(id);
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
