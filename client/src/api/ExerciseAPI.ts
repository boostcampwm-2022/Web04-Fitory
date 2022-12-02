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

  recordExercise: async (exerciseList: ExerciseType.Exercise[]) => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        Exception.UserNotFound();
        return null;
      }

      const path = "exercise/submit";
      const response = await HttpClient.post(path, { userId, exerciseList });
      console.log(response);
      return response.response;
    } catch {
      // eslint-disable-next-line no-alert
      alert("빈 입력 값이 없는지 확인해주세요.");
      return null;
    }
  },
};

export default ExerciseAPI;
