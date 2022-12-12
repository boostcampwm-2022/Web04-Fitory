import { authStorage } from "src/services/ClientStorage";
import { toast } from "react-toastify";
import { error } from "@constants/message";
import HttpClient from "src/services/HttpClient";
import * as ChallengeType from "src/types/challenge";

const ChallengeAPI = {
  getBestChallengeScore: async () => {
    try {
      const userId = authStorage.get();
      const path = `record/best`;
      const response = await HttpClient.get(path, { userId });
      const { bestRecord } = response.response as { bestRecord: ChallengeType.ChallengeDetail };
      return bestRecord;
    } catch {
      toast.error(error.GET_CHALLENGE_INFO);
      return null;
    }
  },

  submitChallengeScore: async (SBDWeight: ChallengeType.Challenge) => {
    try {
      const userId = authStorage.get();
      const path = "record/submit";
      const response = await HttpClient.post(path, {
        ...SBDWeight,
        userId,
      });
      return response.response;
    } catch {
      toast.error(error.SUBMIT_CHALLENGE);
      return null;
    }
  },

  getRecentChallengeTime: async () => {
    try {
      const userId = authStorage.get();
      const path = "record/recent";
      const response = await HttpClient.get(path, { userId });
      return response.response as ChallengeType.ChallengeTimestamp;
    } catch {
      toast.error(error.GET_DATE_INFO);
      return null;
    }
  },

  getEveryDayHistory: async () => {
    try {
      const path = `record/every`;
      const userId = authStorage.get();
      const response = await HttpClient.get(path, { userId });
      const { recordList } = response.response as {
        recordList: ChallengeType.ChallengeHistoryList[];
      };
      return recordList;
    } catch {
      toast.error(error.GET_CHALLENGE_INFO);
      return null;
    }
  },
};

export default ChallengeAPI;
