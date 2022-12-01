import { UserId } from "./user";

export interface Challenge {
  squat: number;
  deadlift: number;
  benchpress: number;
  SBD_sum: number;
}

export interface ChallengeSubmission extends Challenge {
  userId: UserId;
  date: string;
}
