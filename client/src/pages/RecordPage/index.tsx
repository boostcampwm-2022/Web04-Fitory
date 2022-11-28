import React from "react";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExersiceInputSet from "@components/ExerciseInputSet";
import * as s from "./style";

const RecordPage = () => {
  return (
    <PageTemplate title="운동" isRoot={false}>
      <s.RoutineWrapper>
        <RoutineScroller userName="대구사나이김동규" routineList={["등", "가슴", "어께", "하체"]} />
        <ExersiceInputSet />
      </s.RoutineWrapper>
    </PageTemplate>
  );
};

export default RecordPage;
