import { RoutePath } from "@constants/enums";

const Exception = {
  UserNotFound: () => {
    window.history.replaceState(null, "", RoutePath.LOGIN);
    window.location.reload();
  },
};

export default Exception;
