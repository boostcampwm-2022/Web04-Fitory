import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import Exception from "src/services/Exception";
import { UserId } from "src/types/user";
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
        return;
      }

      const path = "exercise/submit";
      await HttpClient.post(path, { userId, exerciseList });
      // eslint-disable-next-line no-alert
      alert("오늘의 운동 완료!");
    } catch {
      // eslint-disable-next-line no-alert
      alert("빈 입력 값이 없는지 확인해주세요.");
    }
  },

  saveRoutine: async ({ routineName, exerciseList }: ExerciseType.Routine) => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        Exception.UserNotFound();
        return;
      }

      const path = "routines/save";
      await HttpClient.post(path, { userId, routineName, exerciseList });
      // eslint-disable-next-line no-alert
      alert("루틴 저장이 완료되었습니다!");
    } catch {
      // eslint-disable-next-line no-alert
      alert("운동 이름과 루틴 이름이 모두 채워져 있는지 확인해주세요.");
    }
  },

  getRoutineList: async (userId: UserId) => {
    const path = `routines/list`;
    const response = await HttpClient.get(path, { userId });
    const { routineList } = response.response as { routineList: ExerciseType.RoutineList };

    return routineList;
  },
};

export default ExerciseAPI;
