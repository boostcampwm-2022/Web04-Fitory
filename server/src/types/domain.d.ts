export interface ExerciseSet {
  index: number;
  kg: number;
  count: number;
  check: number;
}

export interface RecordItem {
  squat: number;
  deadlift: number;
  benchpress: number;
  SBD_sum: number;
  timeStamp: Date;
  userWeight: number;
}

export interface RoutineSet {
  index: number;
  kg: number;
  count: number;
}

export interface RoutineType {
  routineId: number;
  exerciseName: string;
  set: RoutineSet[];
}
