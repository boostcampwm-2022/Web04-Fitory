import { RoutePath } from "@constants/enums";

const Exception = {
  UserNotFound: () => {
    if (window.location.pathname !== RoutePath.LOGIN) {
      window.location.replace(RoutePath.LOGIN);
    }
  },
};

export default Exception;
