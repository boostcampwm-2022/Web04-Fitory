export enum RoutePath {
  HOME = "/",
  STATICS = "/statics",
  SEARCH = "/search",
  PROFILE = "/profile",
  CHALLENGE = "/challenge",
  RECORD = "/record",
  LOGIN = "/login",
  JOIN = "/join",
  NOTIFICATION = "/notification",
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

export enum FormatMonth {
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
}

export enum HeatItemDistance {
  DX = 2,
  DY = 2,
}

export enum ExerciseState {
  EXERCISE = "exercise",
  REST = "rest",
  IDLE = "idle",
}

export enum Tier {
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
  DIAMOND = "DIAMOND",
  CHAMPION = "CHAMPION",
}

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
