export const RoutePath = {
  HOME: "/",
  STATICS: "/statics",
  SEARCH: "/search",
  PROFILE: "/profile",
  CHALLENGE: "/challenge",
  RECORD: "/record",
  LOGIN: "/login",
  JOIN: "/join",
  FOLLOW: "/follow",
} as const;

export const FormatDay = ["일", "월", "화", "수", "목", "금", "토"] as const;

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
] as const;

export const HeatItemDistance = {
  DX: 2,
  DY: 2,
} as const;

export const ExerciseState = {
  EXERCISE: "exercise",
  REST: "rest",
  IDLE: "idle",
} as const;

export const TIER = [null, "BRONZE", "SILVER", "GOLD", "PLATINUM", "DIAMOND", "CHAMPION"] as const;

export const DayTypes = {
  TODAY: "today",
  OTHER_DAYS: "otherDays",
  THIS_DAYS: "thisDays",
} as const;

export const DateTypes = {
  YEAR: "year",
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
} as const;

export const Gender = {
  MALE: 0,
  FEMALE: 1,
} as const;

export const UserName = {
  MIN: 2,
  MAX: 12,
} as const;

export const UserAge = {
  MIN: 1,
  MAX: 120,
} as const;

export const UserHeight = {
  MIN: 1,
  MAX: 300,
} as const;

export const UserWeight = {
  MIN: 1,
  MAX: 300,
} as const;

export const Powerlifting = {
  SQUAT: "스쿼트",
  BENCH_PRESS: "벤치프레스",
  DEADLIFT: "데드리프트",
} as const;

export const PageState = {
  FOLLOWING: "팔로잉",
  FOLLOWER: "팔로워",
} as const;

export const WEIGHT_UNIT = {
  TON: "t",
  KG: "kg",
} as const;

export const QUERY_KEY = {
  USER_INFO: "userInfo",
  EXERCISE_PROFILE: "exerciseProfile",
  EXERCISE_DATE_LIST: "exerciseDateList",
  BEST_CHALLENGE_SCORE: "bestChallengeScore",
  RECENT_CHALLENGE_TIME: "recentChallengeTime",
  ROUTINE_LIST: "routineList",
  ROUTINE_INFO: "routineInfo",
} as const;
