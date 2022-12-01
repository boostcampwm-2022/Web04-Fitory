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

      const path = `exercise/profile?userId=${userId}`;
      const response = await HttpClient.get(path);

      return response.response as ExerciseType.ExerciseProfile;
    } catch {
      Exception.UserNotFound();
      return null;
    }
  },
};

export default ExerciseAPI;
