import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import UserAPI from "@api/UserAPI";

const useGoogleLogin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    ({ accessToken }: { accessToken: string }) => UserAPI.googleLogin(accessToken),
    {
      onSuccess: (isExistingUser) => {
        console.log(isExistingUser);
        if (isExistingUser) {
          return;
        }
        navigate(RoutePath.JOIN);
      },
    },
  );

  return { googleLogin: mutate };
};

export default useGoogleLogin;
