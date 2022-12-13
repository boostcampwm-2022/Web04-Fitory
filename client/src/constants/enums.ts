/* eslint-disable @typescript-eslint/no-redeclare */
export const RoutePath = {
  HOME: "/",
  STATISTICS: "/statistics",
  SEARCH: "/search",
  PROFILE: "/profile",
  EDIT: "/profile/edit",
  CHALLENGE: "/challenge",
  RECORD: "/record",
  LOGIN: "/login",
  JOIN: "/join",
  FOLLOW: "/follow",
  CALENDAR: "/calendar",
  NOTIFICATION: "/notification",
} as const;
export type RoutePath = typeof RoutePath[keyof typeof RoutePath];

export const FormatDay = ["일", "월", "화", "수", "목", "금", "토"] as const;
type FormatDay = typeof FormatDay[keyof typeof FormatDay];

export const FormatMonth = [
  null,
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
] as const;
export type FormatMonth = typeof FormatMonth[keyof typeof FormatMonth];

export const HeatItemDistance = {
  DX: 2,
  DY: 2,
} as const;
export type HeatItemDistance = typeof HeatItemDistance[keyof typeof HeatItemDistance];

export const ExerciseState = {
  EXERCISE: "exercise",
  REST: "rest",
  IDLE: "idle",
} as const;
export type ExerciseState = typeof ExerciseState[keyof typeof ExerciseState];

export const TierName = {
  0: null,
  1: "BRONZE",
  2: "SILVER",
  3: "GOLD",
  4: "PLATINUM",
  5: "DIAMOND",
  6: "CHAMPION",
} as const;
export type TierName = typeof TierName[keyof typeof TierName];

export const DayTypes = {
  TODAY: "today",
  PREV_DAYS: "prevDays",
  NEXT_DAYS: "nextDays",
  THIS_DAYS: "thisDays",
} as const;
export type DayTypes = typeof DayTypes[keyof typeof DayTypes];

export const DateTypes = {
  YEAR: "year",
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
} as const;
export type DateTypes = typeof DateTypes[keyof typeof DateTypes];

export const Gender = {
  MALE: 0,
  FEMALE: 1,
} as const;
export type Gender = typeof Gender[keyof typeof Gender];

export const UserName = {
  MIN: 2,
  MAX: 12,
} as const;
export type UserName = typeof UserName[keyof typeof UserName];

export const UserIntroduce = {
  MAX: 500,
} as const;
export type UserIntroduce = typeof UserIntroduce[keyof typeof UserIntroduce];

export const UserAge = {
  MIN: 1,
  MAX: 120,
} as const;
export type UserAge = typeof UserAge[keyof typeof UserAge];

export const UserHeight = {
  MIN: 1,
  MAX: 300,
} as const;
export type UserHeight = typeof UserHeight[keyof typeof UserHeight];

export const UserWeight = {
  MIN: 1,
  MAX: 300,
} as const;
export type UserWeight = typeof UserWeight[keyof typeof UserWeight];

export const Powerlifting = {
  SQUAT: "스쿼트",
  BENCH_PRESS: "벤치프레스",
  DEADLIFT: "데드리프트",
} as const;
export type Powerlifting = typeof Powerlifting[keyof typeof Powerlifting];

export const PageState = {
  FOLLOWING: "팔로잉",
  FOLLOWER: "팔로워",
} as const;
export type PageState = typeof PageState[keyof typeof PageState];

export const WeightUnit = {
  TON: "t",
  KG: "kg",
} as const;
export type WeightUnit = typeof WeightUnit[keyof typeof WeightUnit];

export const QueryKey = {
  USER_INFO: "userInfo",
  EXERCISE_PROFILE: "exerciseProfile",
  EXERCISE_DATE_LIST: "exerciseDateList",
  BEST_CHALLENGE_SCORE: "bestChallengeScore",
  RECENT_CHALLENGE_TIME: "recentChallengeTime",
  ROUTINE_LIST: "routineList",
  ROUTINE_INFO: "routineInfo",
  SINGLE_MONTH_EXERCISE_HISTORY: "singleMonthExerciseHistory",
  WEIGHT_CLASS_STATISTICS: "weightClassStatistics",
  CHALLENGE_HISTORY: "challengeHistory",
  FOLLOWERLIST: "followerList",
  FOLLOWINGLIST: "followingList",
  RECOMMAND_LIST: "recommandList",
  ALL_USER_LIST: "allUserList",
  NOTIFICATION_COUNT: "notificationCount",
  NOTIFICATION_HISTORY: "notifiactionHistory",
} as const;
export type QueryKey = typeof QueryKey[keyof typeof QueryKey];

export const StatusCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
} as const;
export type StatusCode = typeof StatusCode[keyof typeof StatusCode];

export const ExerciseRecord = {
  WEIGHT_MAX: 1000,
  COUNT_MAX: 100,
};
export type ExerciseRecord = typeof ExerciseRecord[keyof typeof ExerciseRecord];

export const ModalKey = {
  SAVE_ROUTINE: "saveRoutine",
  DELETE_ROUTINE: "deleteRoutine",
  LOGOUT: "logout",
  APP_INSALL: "appInstall",
  CHALLENGE_TIER: "challengeTier",
};
export const NotificationState = {
  EXERCISE: 0,
  FOLLOW: 1,
} as const;
export type NotificationState = typeof NotificationState[keyof typeof NotificationState];
