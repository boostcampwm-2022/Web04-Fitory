import { AxiosError } from "axios";
import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import Exception from "src/services/Exception";
import * as ChallengeType from "src/types/challenge";

const ChallengeAPI = {
  getBestChallengeScore: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = `record/best`;
      const response = await HttpClient.get(path, { userId });
      const { bestRecord } = response.response as { bestRecord: ChallengeType.ChallengeDetail };

      return bestRecord;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },

  submitChallengeScore: async (SBDWeight: ChallengeType.Challenge) => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        Exception.UserNotFound();
        return null;
      }

      const path = "record/submit";
      const response = await HttpClient.post(path, {
        ...SBDWeight,
        userId,
      });

      return response.response;
    } catch (e) {
      if ((e as AxiosError).response?.status === 404) {
        Exception.UserNotFound();
        return null;
      }
      // eslint-disable-next-line no-alert
      alert("올바르지 않은 입력입니다.");
      return null;
    }
  },

  getRecentChallengeTime: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = "record/recent";
      const response = await HttpClient.get(path, { userId });

      return response.response as ChallengeType.ChallengeTimestamp;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },
};

export default ChallengeAPI;
