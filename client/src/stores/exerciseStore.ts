import create from "zustand";
import updateOneElementFromArray from "@utils/updateOneElementFromArray";
import { Exercise, ExerciseSet } from "src/types/exercise";

const getInitialExercise = (): Exercise => {
  return { name: "", setInfo: [{ weight: 0, count: 0, isComplete: false }] };
};

const getInitalExerciseSet = (): ExerciseSet => {
  return { weight: 0, count: 0, isComplete: false };
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
        setInfo: [...exerciseList[exerciseId].setInfo, getInitalExerciseSet()],
      }),
    }));
  },

  deleteExerciseSetItem: (exerciseId: number) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        setInfo: [
          ...exerciseList[exerciseId].setInfo.slice(0, exerciseList[exerciseId].setInfo.length - 1),
        ],
      }),
    }));
  },

  updateExerciseName: (exerciseId: number, name: string) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        name,
      }),
    }));
  },

  updateExerciseSetList: (exerciseId: number, setId: number, setItem: ExerciseSet) => {
    set(({ exerciseList }) => ({
      exerciseList: updateOneElementFromArray(exerciseList, exerciseId, {
        ...exerciseList[exerciseId],
        setInfo: updateOneElementFromArray(exerciseList[exerciseId].setInfo, setId, {
          ...setItem,
        }),
      }),
    }));
  },
}));

export default exerciseStore;
