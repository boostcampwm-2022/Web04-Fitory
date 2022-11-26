import { NotificationState } from "@constants/enums";

export interface Notification {
  senderUserId: number;
  userName: string;
  profileImage: string;
  alarmType: NotificationState;
  timestamp: string;
}
