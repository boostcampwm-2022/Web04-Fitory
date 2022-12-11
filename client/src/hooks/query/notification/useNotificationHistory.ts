import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "react-query";
import NotificationAPI from "@api/NotificationAPI";
import { QueryKey } from "@constants/enums";
import { Notification } from "src/types/notification";

const useNotificationHistory = () => {
  const queryClient = useQueryClient();

  const [notificationHistory, setNotificationHistory] = useState<Notification[]>([]);
  const [notiIndex, setNotiIndex] = useState<number | null>(null);

  const { data, isLoading } = useQuery(
    [QueryKey.NOTIFICATION_HISTORY, notiIndex],
    () => NotificationAPI.getNotificationHistoryList(notiIndex),
    { staleTime: 0 },
  );

  const fetchTenMoreNotification = async () => {
    if (data?.length && notificationHistory.length) {
      setNotiIndex(notificationHistory[notificationHistory.length - 1].index);
    }
  };

  useEffect(() => {
    if (!data?.length) {
      return;
    }
    if (!notificationHistory.length) {
      queryClient.invalidateQueries(QueryKey.NOTIFICATION_COUNT);
    } else if (
      data[data.length - 1].index === notificationHistory[notificationHistory.length - 1].index
    ) {
      return;
    }
    setNotificationHistory([...notificationHistory, ...data]);
  }, [data, notificationHistory, queryClient]);

  return { notificationHistory, fetchTenMoreNotification, isLoading };
};

export default useNotificationHistory;
