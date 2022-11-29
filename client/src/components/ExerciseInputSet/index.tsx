import React, { useState } from "react";
import exerciseCompleteSrc from "@public/icons/btn_exercise_complete.svg";
import exerciseFailSrc from "@public/icons/btn_exercise_fail.svg";
import * as s from "./style";

const ExersiceInfoitem = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  return (
    <s.WeightInfoRow>
      <s.WeightInfoTextField placeholder="0" />
      <s.WeightInfoTextField placeholder="0" />
      <s.CompleteToggleButton onClick={() => setIsComplete(!isComplete)}>
        {isComplete ? (
          <img src={exerciseCompleteSrc} alt="운동 완료 해제 버튼" />
        ) : (
          <img src={exerciseFailSrc} alt="운동 완료 버튼" />
        )}
      </s.CompleteToggleButton>
    </s.WeightInfoRow>
  );
};

const ExersiceInputSet = () => {
  const [exersiceSetCount, setExersiceSetCount] = useState<number>(1);

  const handleClickSetCountButton = (isIncrease: boolean) => {
    if (isIncrease) {
      setExersiceSetCount(exersiceSetCount + 1);
      return;
    }
    if (exersiceSetCount > 1) {
      setExersiceSetCount(exersiceSetCount - 1);
    }
  };

  return (
    <s.Wrapper>
      <s.ExerciseNameTextField placeholder="운동 이름" />
      <s.ExerciseContentWrapper>
        <s.SetCounterWrapper>
          <s.SetLabel>세트</s.SetLabel>
          <s.SetCounter>
            <button type="button" onClick={() => handleClickSetCountButton(false)}>
              −
            </button>
            <span>{exersiceSetCount}</span>
            <button type="button" onClick={() => handleClickSetCountButton(true)}>
              +
            </button>
          </s.SetCounter>
        </s.SetCounterWrapper>
        <s.WeightInfoWrapper>
          <s.WeightInfoRow>
            <s.Label>kg</s.Label>
            <s.Label>회</s.Label>
          </s.WeightInfoRow>
          {Array.from(Array(exersiceSetCount)).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ExersiceInfoitem key={i} />
          ))}
        </s.WeightInfoWrapper>
      </s.ExerciseContentWrapper>
    </s.Wrapper>
  );
};

export default ExersiceInputSet;
