import { useQueryClient, useQuery } from "react-query";
import useServerEvents from "@hooks/useServerEvents";
import { QueryKey } from "@constants/enums";
import NotificationAPI from "@api/NotificationAPI";

const useNotificationCount = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery(QueryKey.NOTIFICATION_COUNT, () =>
    NotificationAPI.getNotificationCount(),
  );

  useServerEvents(() => {
    queryClient.invalidateQueries(QueryKey.NOTIFICATION_COUNT);
  });

  return { notificationCount: data as number };
};

export default useNotificationCount;
