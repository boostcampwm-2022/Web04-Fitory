import { RoutePath } from "@constants/enums";

const Exception = {
  UserNotFound: () => {
    window.location.replace(RoutePath.LOGIN);
  },
};

export default Exception;
