import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import Calendar from "@components/Calendar";
import styled from "styled-components";
import ExerciseSetContainer from "@components/ExerciseSetContainer";

const CalendarPage = () => {
  const [exerciseHistoryList, setHistory] = useState([]);
  const [displayDate, setDisplayDate] = useState();
  const drawExerciseList = () => {
    if (!exerciseHistoryList[displayDate]) {
      return (
        <NoticeContainer>
          <p>* 해당 일자에 운동 기록이 없어요 :(</p>
        </NoticeContainer>
      );
    }
    return exerciseHistoryList[displayDate].map((exercise, index) => {
      return (
        <div key={index}>
          <ExerciseSetContainer exercise={exercise} />
        </div>
      );
    });
  };

  return (
    <PageTemplate isRoot={false} title="캘린더">
      <Calendar isRoot={false} setHistory={setHistory} setDisplayDate={setDisplayDate} />
      <ExerciseHistoryContainer>{drawExerciseList()}</ExerciseHistoryContainer>
    </PageTemplate>
  );
};

export default CalendarPage;

export const ExerciseHistoryContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const NoticeContainer = styled.div`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 20px;
  text-align: center;
  width: 100%;
  padding: 30px;
`;
