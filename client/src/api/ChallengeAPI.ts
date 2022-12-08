import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import * as ChallengeType from "src/types/challenge";

const ChallengeAPI = {
  getBestChallengeScore: async () => {
    const userId = authStorage.get();
    const path = `record/best`;
    const response = await HttpClient.get(path, { userId });
    const { bestRecord } = response.response as { bestRecord: ChallengeType.ChallengeDetail };

    return bestRecord;
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
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert("올바르지 않은 입력입니다.");
      return null;
    }
  },

  getRecentChallengeTime: async () => {
    const userId = authStorage.get();
    const path = "record/recent";
    const response = await HttpClient.get(path, { userId });
    console.log(response);
    return response.response as ChallengeType.ChallengeTimestamp;
  },
};

export default ChallengeAPI;
