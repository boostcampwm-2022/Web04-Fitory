import React, { useState, useRef, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExerciseRecordItem from "@components/ExerciseRecordItem";
import RoutineSaveButton from "@components/RoutineSaveButton";
import exerciseStore from "@stores/exerciseStore";
import useRecordExercise from "@hooks/query/useRecordExercise";
import * as s from "./style";

const RecordPage = () => {
  const { recordExercise } = useRecordExercise();
  const { exerciseList, initExerciseList, createExerciseItem, deleteExerciseItem } =
    exerciseStore();

  const [isIncreaseExercise, setIsIncreaseExercise] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickExerciseIncreaseButton = () => {
    setIsIncreaseExercise(true);
    createExerciseItem();
  };

  const handleClickExerciseDecreaseButton = (index: number) => {
    setIsIncreaseExercise(false);
    if (exerciseList.length > 1) {
      deleteExerciseItem(index);
      return;
    }
    initExerciseList();
  };

  const handleClickExerciseSaveButton = () => {
    recordExercise(exerciseList);
  };

  // 운동 증가 버튼 클릭시 자동 스크롤 다운
  useEffect(() => {
    if (!isIncreaseExercise) {
      return;
    }
    setIsIncreaseExercise(false);
    const targetElement = scrollRef.current;
    if (targetElement) {
      targetElement.scrollTop = targetElement.scrollHeight;
    }
  }, [isIncreaseExercise]);

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
