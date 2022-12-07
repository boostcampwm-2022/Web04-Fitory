/* eslint-disable no-alert */
import { AxiosError } from "axios";
import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import { UserId } from "src/types/user";
import * as ExerciseType from "src/types/exercise";

const ExerciseAPI = {
  getExerciseProfile: async () => {
    const userId = authStorage.get();
    const path = `exercise/profile`;
    const response = await HttpClient.get(path, { userId });

    return response.response as ExerciseType.ExerciseProfile;
  },

  getAllExerciseDate: async () => {
    const userId = authStorage.get();
    const path = `exercise/everyDate`;
    const response = await HttpClient.get(path, { userId });
    const { dateList } = response.response as { dateList: ExerciseType.ExerciseDate };

    return dateList;
  },

  recordExercise: async (exerciseList: ExerciseType.Exercise[]) => {
    try {
      const userId = authStorage.get();
      const path = "exercise/submit";
      await HttpClient.post(path, { userId, exerciseList });
      alert("오늘의 운동 완료!");
      return true;
    } catch {
      alert("빈 입력 값이 없는지 확인해주세요.");
      return false;
    }
  },

  saveRoutine: async ({ routineName, exerciseList }: ExerciseType.Routine) => {
    try {
      const userId = authStorage.get();
      const path = "routines/save";
      await HttpClient.post(path, { userId, routineName, exerciseList });
      alert("루틴 저장이 완료되었습니다!");
    } catch (e) {
      if ((e as AxiosError).response?.status === 400) {
        alert("운동 이름과 루틴 이름이 모두 채워져 있는지 확인해주세요.");
      }
      if ((e as AxiosError).request.status === 403) {
        alert("이미 존재하는 루틴 이름입니다.");
      }
    }
  },

  getRoutineList: async (userId: UserId) => {
    const path = `routines/list`;
    const response = await HttpClient.get(path, { userId });
    const { routineList } = response.response as { routineList: ExerciseType.RoutineList };

    return routineList;
  },

  getSingleRoutineInfo: async (userId: UserId, routineName: string) => {
    const path = `routines/single`;
    const response = await HttpClient.get(path, { userId, routineName });
    const { routine } = response.response as { routine: ExerciseType.RoutineDetailInfo[] };

    return routine;
  },

  deleteRoutine: async (routineName: string) => {
    const path = `routines/delete`;
    const userId = authStorage.get();
    await HttpClient.get(path, { userId, routineName });
  },

  getSingleMonthHistory: async (month: number) => {
    const path = `exercise/singleMonth`;
    const userId = authStorage.get();
    const response = await HttpClient.get(path, { month, userId });
    const { historyList } = response.response;
    return historyList;
  },
};

export default ExerciseAPI;
