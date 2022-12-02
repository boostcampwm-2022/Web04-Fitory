import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import Exception from "src/services/Exception";
import * as ExerciseType from "src/types/exercise";

const ExerciseAPI = {
  getExerciseProfile: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = `exercise/profile`;
      const response = await HttpClient.get(path, { userId });

      return response.response as ExerciseType.ExerciseProfile;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },

  getAllExerciseDate: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = `exercise/everyDate`;
      const response = await HttpClient.get(path, { userId });
      const { dateList } = response.response as { dateList: ExerciseType.ExerciseDate };

      return dateList;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },
};

export default ExerciseAPI;
