import { toast } from "react-toastify";
import { error } from "@constants/message";
import HttpClient from "src/services/HttpClient";
import { authStorage } from "src/services/ClientStorage";
import { Notification } from "src/types/notification";

const NotificationAPI = {
  getNotificationCount: async () => {
    try {
      const userId = authStorage.get();
      const path = "alarms/everyDate";
      const response = await HttpClient.get(path, { userId });
      const { alarmCount } = response.response as { alarmCount: number };
      return alarmCount;
    } catch {
      toast.error(error.GET_NOTIFICATION_COUNT);
      return null;
    }
  },

  getNotificationHistoryList: async (notificationIndex: number) => {
    try {
      const userId = authStorage.get();
      const path = "alarms/list";
      const response = await HttpClient.get(path, { userId, index: notificationIndex });
      const { alarmObject: notificationList } = response.response as {
        alarmObject: Notification[];
      };
      return notificationList;
    } catch {
      toast.error(error.GET_NOTIFICATION_LIST);
      return null;
    }
  },
};

export default NotificationAPI;
