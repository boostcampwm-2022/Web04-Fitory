export interface ExerciseSet {
  weight: number;
  count: number;
  isComplete: boolean;
}

export interface Exercise {
  name: string;
  setInfo: ExerciseSet[];
}

export interface ExerciseProfile {
  totalVolume: number;
  totalExerciseDate: number;
}
