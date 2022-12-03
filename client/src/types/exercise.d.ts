export interface ExerciseSet {
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

export type ExerciseDate = string[];
