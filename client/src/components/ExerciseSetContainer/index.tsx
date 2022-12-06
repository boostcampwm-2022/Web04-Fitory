import React, { useEffect, useState } from "react";
import toggleBtn from "@public/images/btn_toggle.svg";
import exerciseCompleteMark from "@public/icons/mark_exercise_complete.svg";
import exerciseFailMark from "@public/icons/mark_exercise_fail.svg";
import * as s from "./style";

const ExerciseSetContainer = ({ exercise }) => {
  const [visibleState, setVisibleState] = useState(false);

  useEffect(() => {
    setVisibleState(false);
  }, [exercise]);

  const handleClickEvent = () => {
    setVisibleState((prevState) => !prevState);
  };

  const drawExerciseList = (dayExerciseHistory) => {
    return (
      <>
        <s.HeaderRow>
          <s.AttributeLabel>세트</s.AttributeLabel>
          <s.AttributeLabel>무게</s.AttributeLabel>
          <s.AttributeLabel>회수</s.AttributeLabel>
          <s.AttributeLabel>완료</s.AttributeLabel>
        </s.HeaderRow>
        {drawExerciseSet(dayExerciseHistory)}
      </>
    );
  };

  const drawExerciseSet = (dayExerciseHistory) => {
    return dayExerciseHistory.map((set, index) => {
      return (
        <s.SetRow key={index}>
          <s.AttributeLabel>{set.index}</s.AttributeLabel>
          <s.AttributeLabel>{set.kg}</s.AttributeLabel>
          <s.AttributeLabel>{set.count}</s.AttributeLabel>
          <s.CheckedImg
            src={set.check === 1 ? exerciseCompleteMark : exerciseFailMark}
            alt="운동 완료 여부"
          />
        </s.SetRow>
      );
    });
  };
  return (
    <s.Wrapper>
      <s.ExerciseHistoryHeader>
        <button onClick={handleClickEvent}>
          <s.ToggleButton
            visibleState={visibleState}
            src={toggleBtn}
            alt="운동 세부사항 보기 버튼"
          />
        </button>
        <s.SetNameLabel>{exercise.name}</s.SetNameLabel>
      </s.ExerciseHistoryHeader>
      <div>{visibleState ? drawExerciseList(exercise.set) : null}</div>
    </s.Wrapper>
  );
};

export default ExerciseSetContainer;
