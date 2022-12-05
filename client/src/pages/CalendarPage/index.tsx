import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import Calendar from "@components/Calendar";
import styled from "styled-components";
import ExerciseSetContainer from "@components/ExerciseSetContainer";

const CalendarPage = () => {
  const [exerciseHistoryList, setHistory] = useState([]);
  const [displayDate, setDisplayDate] = useState();
  const drawExerciseList = () => {
    if (!exerciseHistoryList[displayDate]) return;
    return exerciseHistoryList[displayDate].map((exercise, index) => {
      console.log(exercise);
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
