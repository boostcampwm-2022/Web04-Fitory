export enum RoutePath {
  HOME = "/",
  STATICS = "/statics",
  SEARCH = "/search",
  PROFILE = "/profile",
  CHALLENGE = "/challenge",
  RECORD = "/record",
  LOGIN = "/login",
  JOIN = "/join",
  FOLLOW = "/follow",
}

export enum FormatDay {
  "일",
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
}

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

export enum HeatItemDistance {
  DX = 2,
  DY = 2,
}

export enum ExerciseState {
  EXERCISE = "exercise",
  REST = "rest",
  IDLE = "idle",
}

export const TIER = [null, "BRONZE", "SILVER", "GOLD", "PLATINUM", "DIAMOND", "CHAMPION"] as const;

export enum DayTypes {
  TODAY = "today",
  OTHER_DAYS = "otherDays",
  THIS_DAYS = "thisDays",
}

export enum DateTypes {
  YEAR = "year",
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
}

export enum Gender {
  MALE = 0,
  FEMALE = 1,
}

export enum UserName {
  MIN = 2,
  MAX = 12,
}

export enum UserAge {
  MIN = 1,
  MAX = 120,
}

export enum UserHeight {
  MIN = 1,
  MAX = 300,
}

export enum UserWeight {
  MIN = 1,
  MAX = 300,
}

export enum Powerlifting {
  SQUAT = "스쿼트",
  BENCH_PRESS = "벤치프레스",
  DEADLIFT = "데드리프트",
}

export enum PageState {
  FOLLOWING = "팔로잉",
  FOLLOWER = "팔로워",
}

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
