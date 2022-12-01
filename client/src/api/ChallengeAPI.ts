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
      const { bestRecord } = response.response as { bestRecord: ChallengeType.Challenge };

      return bestRecord;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },
};

export default ChallengeAPI;
