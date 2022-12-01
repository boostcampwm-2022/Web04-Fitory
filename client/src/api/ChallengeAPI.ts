import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import Exception from "src/services/Exception";
import { Challenge } from "src/types/challenge";

const ChallengeAPI = {
  getBestChallengeScore: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = `record/best?userId=${userId}`;
      const response = await HttpClient.get(path);
      const { bestRecord } = response.response as { bestRecord: Challenge };

      return bestRecord;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },
};

export default ChallengeAPI;
