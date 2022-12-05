import create from "zustand";
import updateOneElementFromArray from "@utils/updateOneElementFromArray";
import { Exercise, ExerciseSet, RoutineDetailInfo } from "src/types/exercise";

const getInitialExercise = (): Exercise => {
  return { exerciseName: "", setList: [{ kg: 0, count: 0, check: 0 }] };
};

const getInitalExerciseSet = (): ExerciseSet => {
  return { kg: 0, count: 0, check: 0 };
};

interface ExerciseState {
  exerciseList: Exercise[];
  initExerciseList: () => void;
  createExerciseItem: () => void;
  deleteExerciseItem: (exerciseId: number) => void;
  createExerciseSetItem: (exerciseId: number) => void;
  deleteExerciseSetItem: (exerciseId: number) => void;
  updateExerciseName: (exerciseId: number, name: string) => void;
  updateExerciseSetList: (exerciseId: number, setId: number, newSet: ExerciseSet) => void;
  fetchRoutine: (routineInfo: RoutineDetailInfo[]) => void;
}

const exerciseStore = create<ExerciseState>((set) => ({
  exerciseList: [getInitialExercise()],

  initExerciseList: () => set({ exerciseList: [getInitialExercise()] }),

  createExerciseItem: () => {
    set(({ exerciseList }) => ({ exerciseList: [...exerciseList, getInitialExercise()] }));
  },

  deleteExerciseItem: (exerciseId: number) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId),
    }));
  },

  createExerciseSetItem: (exerciseId: number) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        setList: [...exerciseList[exerciseId].setList, getInitalExerciseSet()],
      }),
    }));
  },

  deleteExerciseSetItem: (exerciseId: number) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        setList: [
          ...exerciseList[exerciseId].setList.slice(0, exerciseList[exerciseId].setList.length - 1),
        ],
      }),
    }));
  },

  updateExerciseName: (exerciseId: number, exerciseName: string) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        exerciseName,
      }),
    }));
  },

  updateExerciseSetList: (exerciseId: number, setId: number, setItem: ExerciseSet) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        setList: updateOneElementFromArray(exerciseList[exerciseId].setList, setId, {
          ...setItem,
        }),
      }),
    }));
  },

  fetchRoutine: (routineInfo: RoutineDetailInfo[]) => {
    set({
      exerciseList: routineInfo.map(({ name, set: setList }) => ({
        exerciseName: name,
        setList: setList.map(({ kg, count }) => ({
          kg,
          count,
          check: 0,
        })),
      })),
    });
  },
}));

export default exerciseStore;
