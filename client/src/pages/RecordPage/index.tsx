import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExersiceInputSet from "@components/ExerciseInputSet";
import * as s from "./style";

const RecordPage = () => {
  const [exersiceCount, setExersiceCount] = useState<number>(1);
  const handleClickExersiceCountButton = () => {
    setExersiceCount(exersiceCount + 1);
  };

  return (
    <PageTemplate title="운동" isRoot={false}>
      <s.RoutineWrapper>
        <RoutineScroller userName="대구사나이김동규" routineList={["등", "가슴", "어께", "하체"]} />
        {Array.from(Array(exersiceCount)).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <s.ExersiceItem key={i}>
            <p>#{i + 1}</p>
            <ExersiceInputSet />
          </s.ExersiceItem>
        ))}
        <s.ExerciseCountButton onClick={handleClickExersiceCountButton}>
          <span>＋</span>운동 추가
        </s.ExerciseCountButton>
      </s.RoutineWrapper>
    </PageTemplate>
  );
};

export default RecordPage;
