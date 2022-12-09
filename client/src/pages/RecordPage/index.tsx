import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExerciseRecordList from "@components/ExerciseRecordList";
import RoutineSaveButton from "@components/RoutineSaveButton";
import exerciseStore from "@stores/exerciseStore";
import useRecordExercise from "@hooks/query/exercise/useRecordExercise";
import ExerciseAPI from "@api/ExerciseAPI";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const RecordPage = () => {
  const location = useLocation();
  const { recordExercise } = useRecordExercise();
  const { exerciseList, initExerciseList, fetchRoutine } = exerciseStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleFetchRoutine = useCallback(
    async (userId: number, routineName: string) => {
      const routineInfo = await ExerciseAPI.getSingleRoutineInfo(userId, routineName);
      fetchRoutine(routineInfo);
    },
    [fetchRoutine],
  );

  const handleClickExerciseSaveButton = () => {
    recordExercise(exerciseList);
  };

  const handleClickRoutineItem = (routineName: string) => {
    handleFetchRoutine(authStorage.get(), routineName);
  };

  useEffect(() => {
    if (location.state && location.state.userId && location.state.routineName) {
      const { userId, routineName } = location.state;
      handleFetchRoutine(userId, routineName);
    }
  }, [handleFetchRoutine, location]);

  useEffect(() => {
    initExerciseList();
    return () => initExerciseList();
  }, [initExerciseList]);

  return (
    <PageTemplate title="운동" isRoot={false}>
      <s.Wrapper ref={scrollRef}>
        <s.RoutineWrapper>
          <RoutineScroller userId={authStorage.get()} onClickRoutineItem={handleClickRoutineItem} />
        </s.RoutineWrapper>
        <ExerciseRecordList scrollRef={scrollRef} />
        <s.SaveButtonWrapper>
          <RoutineSaveButton />
          <s.ExerciseSaveButton onClick={handleClickExerciseSaveButton}>
            운동 완료
          </s.ExerciseSaveButton>
        </s.SaveButtonWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RecordPage;
