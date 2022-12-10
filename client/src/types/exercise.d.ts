export interface ExerciseSet {
  index?: number;
  kg: number;
  count: number;
  check?: 0 | 1;
}

export interface Exercise {
  exerciseName: string;
  setList: ExerciseSet[];
}

export interface Routine {
  routineName: string;
  exerciseList: Exercise[];
}

export interface ExerciseProfile {
  totalVolume: number;
  totalExerciseDate: number;
}

export interface RoutineDetailInfo {
  routineId: number;
  exerciseName: string;
  set: [{ kg: number; count: number }];
}

export type ExerciseDate = string[];

export type RoutineList = string[];

export interface ExerciseHistory {
  name: string;
  set: ExerciseSet[];
}

export interface ExerciseHistoryList {
  [key: string]: ExerciseHistory[];
}

export interface SDBRecordHistory {
  index: number;
  squat: number;
  deadlift: number;
  benchpress: number;
  SBD_sum: number;
  timeStamp: Date;
  userWeight: number;
}

export interface SDBRecordHistoryArray {
  index: number;
  record: SDBRecordHistory;
}
