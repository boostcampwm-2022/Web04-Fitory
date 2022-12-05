import React, { useState, useEffect, RefObject } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import ExerciseRecordItem from "@components/ExerciseRecordItem";
import exerciseStore from "@stores/exerciseStore";
import * as s from "./style";

const ExerciseRecordList = ({ scrollRef }: { scrollRef: RefObject<HTMLDivElement> }) => {
  const [isIncreaseExercise, setIsIncreaseExercise] = useState<boolean>(false);
  const { exerciseList, initExerciseList, createExerciseItem, deleteExerciseItem } =
    exerciseStore();

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

  // 운동 증가 버튼 클릭시 자동 스크롤 다운
  useEffect(() => {
    if (!scrollRef || !isIncreaseExercise) {
      return;
    }
    setIsIncreaseExercise(false);
    const targetElement = scrollRef.current;
    if (targetElement) {
      targetElement.scrollTop = targetElement.scrollHeight;
    }
  }, [scrollRef, isIncreaseExercise]);

  return (
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
  );
};

export default ExerciseRecordList;
