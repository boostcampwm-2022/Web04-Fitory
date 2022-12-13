import { UserId } from "./user";

export interface Challenge {
  squat: number;
  deadlift: number;
  benchpress: number;
}

export interface ChallengeDetail extends Challenge {
  SBD_sum: number;
}

export interface ChallengeSubmission extends Challenge {
  userId: UserId;
}

export interface ChallengeTimestamp {
  nowTimeStamp: string;
  recentTimeStamp: string;
}

export interface ChallengeHistory extends ChallengeDetail {
  timeStamp: Date;
  userWeight: number;
}

export interface ChallengeHistoryList {
  index: number;
  record: ChallengeHistory;
}
