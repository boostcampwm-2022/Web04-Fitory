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
      onSuccess: ({ oauthId, validate }) => {
        console.log(oauthId, validate);
        if (validate) {
          return;
        }
        navigate(RoutePath.JOIN, { state: { oauthId } });
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
