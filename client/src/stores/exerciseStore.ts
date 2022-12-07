/* eslint-disable no-param-reassign */
import create from "zustand";
import produce from "immer";
import { Exercise, ExerciseSet, RoutineDetailInfo } from "src/types/exercise";

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

const getInitialExercise = (): Exercise => {
  return { exerciseName: "", setList: [{ kg: 0, count: 0, check: 0 }] };
};

const exerciseStore = create<ExerciseState>((set) => ({
  exerciseList: [getInitialExercise()],

  initExerciseList: () => set({ exerciseList: [getInitialExercise()] }),

  createExerciseItem: () => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        exerciseList.push(getInitialExercise());
      }),
    );
  },

  deleteExerciseItem: (exerciseId: number) => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        exerciseList.splice(exerciseId, 1);
      }),
    );
  },

  createExerciseSetItem: (exerciseId: number) => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        const { setList } = exerciseList[exerciseId];
        setList.push(setList[setList.length - 1]);
      }),
    );
  },

  deleteExerciseSetItem: (exerciseId: number) => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        exerciseList[exerciseId].setList.pop();
      }),
    );
  },

  updateExerciseName: (exerciseId: number, exerciseName: string) => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        exerciseList[exerciseId].exerciseName = exerciseName;
      }),
    );
  },

  updateExerciseSetList: (exerciseId: number, setId: number, setItem: ExerciseSet) => {
    set(
      produce(({ exerciseList }: ExerciseState) => {
        exerciseList[exerciseId].setList[setId] = setItem;
      }),
    );
  },

  fetchRoutine: (routineInfo: RoutineDetailInfo[]) => {
    set(
      produce((draft: ExerciseState) => {
        draft.exerciseList = routineInfo.map(({ exerciseName, set: setList }) => ({
          exerciseName,
          setList: setList.map(({ kg, count }) => ({
            kg,
            count,
            check: 0,
          })),
        }));
      }),
    );
  },
}));

export default exerciseStore;
