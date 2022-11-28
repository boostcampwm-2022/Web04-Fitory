import React, { useState, useRef, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import ExersiceInputSet from "@components/ExerciseInputSet";
import * as s from "./style";

const RecordPage = () => {
  /**
   * 임시로 운동 수를 상태로 제어함.
   * TODO: 서버 API 연동 후 객체 형식으로 변경.
   */
  const [exersiceCount, setExersiceCount] = useState<number>(1);
  const [prevExersiceCount, setPrevExersiceCount] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickExerciseIncreaseButton = () => {
    setPrevExersiceCount(exersiceCount);
    setExersiceCount(exersiceCount + 1);
  };

  const handleClickExerciseDecreaseButton = () => {
    setPrevExersiceCount(exersiceCount);
    if (exersiceCount > 1) {
      setExersiceCount(exersiceCount - 1);
    }
  };

  useEffect(() => {
    if (prevExersiceCount >= exersiceCount) {
      return;
    }
    const targetElement = scrollRef.current;
    if (targetElement) {
      targetElement.scrollTop = targetElement.scrollHeight;
    }
  }, [prevExersiceCount, exersiceCount]);

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
