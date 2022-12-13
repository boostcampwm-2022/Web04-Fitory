import React, { useState } from "react";
import toggleBtn from "@public/images/btn_toggle.svg";
import exerciseCompleteMark from "@public/icons/mark_exercise_complete.svg";
import exerciseFailMark from "@public/icons/mark_exercise_fail.svg";
import Paper from "@components/design/Paper";
import { ExerciseHistory } from "src/types/exercise";
import * as s from "./style";

const ExerciseSetContainer = ({ exercise }: { exercise: ExerciseHistory }) => {
  const [visibleState, setVisibleState] = useState(false);

  const handleClickEvent = () => {
    setVisibleState((prevState) => !prevState);
  };

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <s.ExerciseHistoryHeader>
          <s.ToggleButton type="button" visibleState={visibleState} onClick={handleClickEvent}>
            <img src={toggleBtn} alt="운동 세부사항 보기 버튼" />
          </s.ToggleButton>
          <s.SetNameLabel>{exercise.name}</s.SetNameLabel>
        </s.ExerciseHistoryHeader>
        <s.ExerciseInfoWrapper visibleState={visibleState}>
          {visibleState && (
            <s.ExerciseList>
              <s.HeaderRow>
                <s.AttributeLabel>세트</s.AttributeLabel>
                <s.AttributeLabel>kg</s.AttributeLabel>
                <s.AttributeLabel>회</s.AttributeLabel>
              </s.HeaderRow>
              {exercise.set.map((set) => (
                <s.SetRow key={set.index}>
                  <s.AttributeLabel>{set.index}</s.AttributeLabel>
                  <s.AttributeLabel>{set.kg}</s.AttributeLabel>
                  <s.AttributeLabel>{set.count}</s.AttributeLabel>
                  {set.check ? (
                    <s.CheckedImg src={exerciseCompleteMark} alt="운동 완료 표시" />
                  ) : (
                    <s.FailCheckedImg src={exerciseFailMark} alt="운동 미완료 표시" />
                  )}
                </s.SetRow>
              ))}
            </s.ExerciseList>
          )}
        </s.ExerciseInfoWrapper>
      </s.Wrapper>
    </Paper>
  );
};

export default ExerciseSetContainer;
