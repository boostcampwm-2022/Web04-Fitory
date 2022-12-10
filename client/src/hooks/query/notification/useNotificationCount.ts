import { useEffect } from "react";
import { useQueryClient, useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import NotificationAPI from "@api/NotificationAPI";
import { authStorage } from "src/services/ClientStorage";

const useNotificationCount = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery(QueryKey.NOTIFICATION_COUNT, () =>
    NotificationAPI.getNotificationCount(),
  );

  useEffect(() => {
    const subscription = new EventSource(
      `${process.env.SERVER_BASE_URL}event/register?user_id=${authStorage.get()}`,
      { withCredentials: true },
    );
    subscription.onmessage = (message) => {
      const isNotification = JSON.parse(message.data);
      if (isNotification) {
        queryClient.invalidateQueries(QueryKey.NOTIFICATION_COUNT);
      }
    };
  }, [queryClient]);

  return { notificationCount: data as number };
};

export default useNotificationCount;
