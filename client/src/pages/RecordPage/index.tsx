import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExersiceInputSet from "@components/ExerciseInputSet";
import { MdDeleteForever } from "react-icons/md";
import * as s from "./style";

const RecordPage = () => {
  const [exersiceCount, setExersiceCount] = useState<number>(1);
  const handleClickExerciseIncreaseButton = () => {
    setExersiceCount(exersiceCount + 1);
  };
  const handleClickExerciseDecreaseButton = () => {
    if (exersiceCount > 1) {
      setExersiceCount(exersiceCount - 1);
    }
  };

  return (
    <PageTemplate title="운동" isRoot={false}>
      <s.Wrapper>
        <s.RoutineWrapper>
          <RoutineScroller
            userName="대구사나이김동규"
            routineList={["등", "가슴", "어께", "하체"]}
          />
        </s.RoutineWrapper>
        <s.ExerciseListWrapper>
          {Array.from(Array(exersiceCount)).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <s.ExersiceItem key={i}>
              <s.ExersiceHeader>
                <p># {i + 1}</p>
                <s.ExersiceDecreaseButton onClick={handleClickExerciseDecreaseButton}>
                  <MdDeleteForever size={25} />
                </s.ExersiceDecreaseButton>
              </s.ExersiceHeader>
              <ExersiceInputSet />
            </s.ExersiceItem>
          ))}
          <s.ExerciseIncreaseButton onClick={handleClickExerciseIncreaseButton}>
            <span>＋</span>운동 추가
          </s.ExerciseIncreaseButton>
        </s.ExerciseListWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RecordPage;
