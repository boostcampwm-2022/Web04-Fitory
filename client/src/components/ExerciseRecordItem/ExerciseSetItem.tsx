import React, { ChangeEvent } from "react";
import exerciseCompleteSrc from "@public/icons/btn_exercise_complete.svg";
import exerciseFailSrc from "@public/icons/btn_exercise_fail.svg";
import exerciseStore from "@stores/exerciseStore";
import { NUMBER_REGEX } from "@constants/consts";
import * as s from "./style";

interface ExerciseSetItemProps {
  exerciseId: number;
  setId: number;
}

const ExerciseSetItem = ({ exerciseId, setId }: ExerciseSetItemProps) => {
  const { exerciseList, updateExerciseSetList } = exerciseStore();

  const hadleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const setItem = exerciseList[exerciseId].setInfo[setId];
    const matchedArray = e.target.value.match(NUMBER_REGEX);
    const numberValue = matchedArray ? +matchedArray[0] : 0;

    if (e.target.name === "weight") {
      updateExerciseSetList(exerciseId, setId, {
        ...setItem,
        weight: numberValue,
      });
      return;
    }

    updateExerciseSetList(exerciseId, setId, {
      ...setItem,
      count: numberValue,
    });
  };

  const handleClickCompleteButton = () => {
    const setItem = exerciseList[exerciseId].setInfo[setId];

    updateExerciseSetList(exerciseId, setId, {
      ...setItem,
      isComplete: !setItem.isComplete,
    });
  };

  return (
    <s.WeightInfoRow>
      <s.WeightInfoTextField
        name="weight"
        placeholder="0"
        value={exerciseList[exerciseId].setInfo[setId].weight || ""}
        onChange={(e) => hadleChangeTextField(e)}
      />
      <s.WeightInfoTextField
        name="count"
        placeholder="0"
        value={exerciseList[exerciseId].setInfo[setId].count || ""}
        onChange={(e) => hadleChangeTextField(e)}
      />
      <s.CompleteToggleButton onClick={handleClickCompleteButton}>
        {exerciseList[exerciseId].setInfo[setId].isComplete ? (
          <img src={exerciseCompleteSrc} alt="운동 완료 해제 버튼" />
        ) : (
          <img src={exerciseFailSrc} alt="운동 완료 버튼" />
        )}
      </s.CompleteToggleButton>
    </s.WeightInfoRow>
  );
};

export default ExerciseSetItem;
