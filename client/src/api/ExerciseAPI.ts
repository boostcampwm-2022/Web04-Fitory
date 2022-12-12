import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { StatusCode } from "@constants/enums";
import { success, error } from "@constants/message";
import { authStorage } from "src/services/ClientStorage";
import HttpClient from "src/services/HttpClient";
import { UserId } from "src/types/user";
import * as ExerciseType from "src/types/exercise";

const ExerciseAPI = {
  getExerciseProfile: async () => {
    try {
      const userId = authStorage.get();
      const path = `exercise/profile`;
      const response = await HttpClient.get(path, { userId });
      return response.response as ExerciseType.ExerciseProfile;
    } catch {
      toast.error(error.GET_EXERCISE_INFO);
      return null;
    }
  },

  getAllExerciseDate: async (userId: UserId) => {
    try {
      const path = `exercise/everyDate`;
      const response = await HttpClient.get(path, { userId });
      const { dateList } = response.response as { dateList: ExerciseType.ExerciseDate };
      return dateList;
    } catch {
      toast.error(error.GET_EXERCISE_INFO);
      return null;
    }
  },

  recordExercise: async (exerciseList: ExerciseType.Exercise[]) => {
    try {
      const userId = authStorage.get();
      const path = "exercise/submit";
      await HttpClient.post(path, { userId, exerciseList });
      toast.success(success.RECORD_EXERCISE);
      return true;
    } catch {
      toast.error(error.RECORD_EXERCISE);
      return false;
    }
  },

  saveRoutine: async ({ routineName, exerciseList }: ExerciseType.Routine) => {
    try {
      const userId = authStorage.get();
      const path = "routines/save";
      await HttpClient.post(path, { userId, routineName, exerciseList });
      toast.success(success.SAVE_ROUTINE);
      return true;
    } catch (e) {
      if ((e as AxiosError).response?.status === StatusCode.BAD_REQUEST) {
        toast.error(error.SAVE_ROUTINE_EMPTY);
      }
      if ((e as AxiosError).request.status === StatusCode.FORBIDDEN) {
        toast.error(error.SAVE_ROUTINE_DUPLICATE);
      }
      return false;
    }
  },

  getRoutineList: async (userId: UserId) => {
    try {
      const path = `routines/list`;
      const response = await HttpClient.get(path, { userId });
      const { routineList } = response.response as { routineList: ExerciseType.RoutineList };
      return routineList;
    } catch {
      toast.error(error.GET_ROUTINE_LIST);
      return false;
    }
  },

  getSingleRoutineInfo: async (userId: UserId, routineName: string) => {
    try {
      const path = `routines/single`;
      const response = await HttpClient.get(path, { userId, routineName });
      const { routine } = response.response as { routine: ExerciseType.RoutineDetailInfo[] };
      return routine;
    } catch {
      toast.error(error.GET_SINGLE_ROUTINE);
      return null;
    }
  },

  deleteRoutine: async (routineName: string) => {
    try {
      const path = `routines/delete`;
      const userId = authStorage.get();
      await HttpClient.get(path, { userId, routineName });
    } catch {
      toast.error(error.DELETE_ROUTINE);
    }
  },

  getSingleMonthHistory: async (month: number) => {
    try {
      const path = `exercise/singleMonth`;
      const userId = authStorage.get();
      const response = await HttpClient.get(path, { month, userId });
      const { historyList } = response.response as {
        historyList: ExerciseType.ExerciseHistoryList;
      };
      return historyList;
    } catch {
      toast.error(error.GET_EXERCISE_HISTORY);
      return null;
    }
  },

  getEveryDayHistory: async () => {
    try {
      const path = `record/every`;
      const userId = authStorage.get();
      const response = await HttpClient.get(path, { userId });
      const { recordList } = response.response as {
        recordList: ExerciseType.SDBRecordHistoryArray[];
      };
      return recordList;
    } catch {
      toast.error(error.GET_EXERCISE_INFO);
      return null;
    }
  },
};

export default ExerciseAPI;
