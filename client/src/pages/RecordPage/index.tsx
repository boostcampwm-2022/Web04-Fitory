import React, { useState, useRef, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExerciseRecordItem from "@components/ExerciseRecordItem";
import exerciseStore from "@stores/exerciseStore";
import * as s from "./style";

const RecordPage = () => {
  const { exerciseList, initExerciseList, createExerciseItem, deleteExerciseItem } =
    exerciseStore();
  const [prevExersiceCount, setPrevExersiceCount] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickExerciseIncreaseButton = () => {
    setPrevExersiceCount(exerciseList.length);
    createExerciseItem();
  };

  const handleClickExerciseDecreaseButton = (index: number) => {
    setPrevExersiceCount(exerciseList.length);
    if (exerciseList.length > 1) {
      deleteExerciseItem(index);
      return;
    }
    initExerciseList();
  };

  useEffect(() => {
    if (prevExersiceCount >= exerciseList.length) {
      return;
    }
    const targetElement = scrollRef.current;
    if (targetElement) {
      targetElement.scrollTop = targetElement.scrollHeight;
    }
  }, [prevExersiceCount, exerciseList]);

  return (
    <PageTemplate title="운동" isRoot={false}>
      <s.Wrapper ref={scrollRef}>
        <s.RoutineWrapper>
          <RoutineScroller
            userName="대구사나이김동규"
            routineList={["등", "가슴", "어께", "하체"]}
          />
        </s.RoutineWrapper>
        <s.ExerciseListWrapper>
          {exerciseList.map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <s.ExersiceItem key={i}>
              <s.ExersiceHeader>
                <p># {i + 1}</p>
                <s.ExersiceDecreaseButton onClick={() => handleClickExerciseDecreaseButton(i)}>
                  <MdDeleteForever size={25} />
                </s.ExersiceDecreaseButton>
              </s.ExersiceHeader>
              <ExerciseRecordItem exerciseId={i} />
            </s.ExersiceItem>
          ))}
          <s.ExerciseIncreaseButton onClick={handleClickExerciseIncreaseButton}>
            <AiOutlinePlus size={20} />
            <span>운동 추가</span>
          </s.ExerciseIncreaseButton>
        </s.ExerciseListWrapper>
        <s.SaveButtonWrapper>
          <s.RoutineSaveButton>루틴 저장</s.RoutineSaveButton>
          <s.ExerciseSaveButton>운동 완료</s.ExerciseSaveButton>
        </s.SaveButtonWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RecordPage;
