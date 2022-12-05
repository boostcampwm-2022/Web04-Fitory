export interface exerciseSet {
  index: number;
  kg: number;
  count: number;
  check: number;
}

export interface recordItem {
  squat: number;
  deadlift: number;
  benchpress: number;
  SBD_sum: number;
  timeStamp: Date;
  userWeight: number;
}

export interface routineSet {
  index: number;
  kg: number;
  count: number;
}
