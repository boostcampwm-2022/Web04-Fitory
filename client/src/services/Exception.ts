import { RoutePath } from "@constants/enums";
import { authStorage } from "./ClientStorage";

const Exception = {
  UserNotFound: () => {
    authStorage.remove();
    window.history.replaceState(null, "", RoutePath.LOGIN);
    window.location.reload();
  },
};

export default Exception;
