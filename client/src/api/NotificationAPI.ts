import HttpClient from "src/services/HttpClient";
import { authStorage } from "src/services/ClientStorage";

const NotificationAPI = {
  getNotificationCount: async () => {
    const userId = authStorage.get();
    const path = "alarms/everyDate";
    const response = await HttpClient.get(path, { userId });
    const { alarmCount } = response.response as { alarmCount: number };

    return alarmCount;
  },
};

export default NotificationAPI;
