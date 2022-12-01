import React, { ChangeEvent } from "react";
import exerciseStore from "@stores/exerciseStore";
import ExerciseSetItem from "./ExerciseSetItem";
import * as s from "./style";

interface ExersiceInputSetProps {
  exerciseId: number;
}

const ExerciseRecordItem = ({ exerciseId }: ExersiceInputSetProps) => {
  const { exerciseList, createExerciseSetItem, deleteExerciseSetItem, updateExerciseName } =
    exerciseStore();

  const handleChangeExerciseName = (e: ChangeEvent<HTMLInputElement>) => {
    updateExerciseName(exerciseId, e.target.value);
  };

  const handleClickCreateSetButton = () => {
    createExerciseSetItem(exerciseId);
  };

  const handleClickDeleteSetButton = () => {
    if (exerciseList[exerciseId].setInfo.length > 1) {
      deleteExerciseSetItem(exerciseId);
    }
  };

  return (
    <s.Wrapper>
      <s.ExerciseNameTextField
        placeholder="운동 이름"
        value={exerciseList[exerciseId].name}
        onChange={(e) => handleChangeExerciseName(e)}
      />
      <s.ExerciseContentWrapper>
        <s.SetCounterWrapper>
          <s.SetLabel>세트</s.SetLabel>
          <s.SetCounter>
            <button type="button" onClick={handleClickDeleteSetButton}>
              −
            </button>
            <span>{exerciseList[exerciseId].setInfo.length}</span>
            <button type="button" onClick={handleClickCreateSetButton}>
              +
            </button>
          </s.SetCounter>
        </s.SetCounterWrapper>
        <s.WeightInfoWrapper>
          <s.WeightInfoRow>
            <s.Label>kg</s.Label>
            <s.Label>회</s.Label>
          </s.WeightInfoRow>
          {exerciseList[exerciseId].setInfo.map((_, setId) => (
            // eslint-disable-next-line react/no-array-index-key
            <ExerciseSetItem key={`${exerciseId}${setId}`} exerciseId={exerciseId} setId={setId} />
          ))}
        </s.WeightInfoWrapper>
      </s.ExerciseContentWrapper>
    </s.Wrapper>
  );
};

export default ExerciseRecordItem;
