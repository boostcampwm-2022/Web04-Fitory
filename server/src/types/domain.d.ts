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
  date: string;
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
