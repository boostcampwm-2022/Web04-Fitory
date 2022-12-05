import React, { useEffect, useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import Calendar from "@components/Calendar";
import styled from "styled-components";

const CalendarPage = () => {
  const [exerciseHistoryList, setHistory] = useState();
  const [displayDate, setDisplayDate] = useState();
  useEffect(() => {
    if (displayDate) {
      console.log(exerciseHistoryList[displayDate]);
    }
  }, [displayDate]);
  return (
    <PageTemplate isRoot={false} title="캘린더">
      <Calendar isRoot={false} setHistory={setHistory} setDisplayDate={setDisplayDate} />
      <ExerciseHistoryContainer />
    </PageTemplate>
  );
};

export default CalendarPage;

export const ExerciseHistoryContainer = styled.div`
  width: 100%;
  height: 500px;
`;
