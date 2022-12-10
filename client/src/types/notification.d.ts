import { NotificationState, NotificationRead } from "@constants/enums";

export interface Notification {
  index: number;
  check: NotificationRead;
  name: string;
  sender_user_id: number;
  profile_image: string;
  alarm_type: NotificationState;
  time_stamp: string;
}
