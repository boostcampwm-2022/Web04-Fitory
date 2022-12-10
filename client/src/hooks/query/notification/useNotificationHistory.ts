import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NotificationAPI from "@api/NotificationAPI";
import { QueryKey } from "@constants/enums";
import { Notification } from "src/types/notification";
import { NO_STALE_TIME } from "@constants/consts";

const useNotificationHistory = () => {
  const [notificationHistory, setNotificationHistory] = useState<Notification[]>([]);
  const [notiIndex, setNotiIndex] = useState(0);

  const { data } = useQuery(
    [QueryKey.NOTIFICATION_HISTORY, notiIndex],
    () => NotificationAPI.getNotificationHistoryList(notiIndex),
    { staleTime: NO_STALE_TIME },
  );

  const fetchTenMoreNotification = () => {
    if (data?.length) {
      setNotiIndex(notificationHistory[notificationHistory.length - 1].index);
    }
  };

  useEffect(() => {
    if (data) {
      setNotificationHistory([...notificationHistory, ...data]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { notificationHistory, fetchTenMoreNotification };
};

export default useNotificationHistory;
