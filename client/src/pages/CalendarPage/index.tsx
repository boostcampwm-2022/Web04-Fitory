import React, { useState } from "react";
import dayjs from "dayjs";
import PageTemplate from "@pages/PageTemplate";
import Calendar from "@components/Calendar";
import ExerciseSetContainer from "@components/ExerciseSetContainer";
import useSingleMonthExerciseHistory from "@hooks/query/useSingleMonthExerciseHistory";
import * as s from "./style";

const ExerciseHistory = ({ month, displayDate }: { month: number; displayDate: string }) => {
  const { exerciseHistoryList } = useSingleMonthExerciseHistory(month);

  const checkDateOfExercise = () => {
    return displayDate && exerciseHistoryList[displayDate];
  };

  return (
    <s.ExerciseHistoryContainer>
      {checkDateOfExercise() ? (
        exerciseHistoryList[displayDate].map((exercise, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <ExerciseSetContainer exercise={exercise} />
          </div>
        ))
      ) : (
        <s.NoticeContainer>
          <p>해당 일자에 운동 기록이 없어요 :(</p>
        </s.NoticeContainer>
      )}
    </s.ExerciseHistoryContainer>
  );
};

const CalendarPage = () => {
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth() + 1);
  const [displayDate, setDisplayDate] = useState<string>(dayjs().format("YYMMDD"));

  return (
    <PageTemplate isRoot={false} title="캘린더">
      <s.Wrapper>
        <Calendar
          isRoot={false}
          setCalendarMonth={setCalendarMonth}
          displayDate={displayDate}
          setDisplayDate={setDisplayDate}
        />
        <ExerciseHistory month={calendarMonth} displayDate={displayDate} />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default CalendarPage;
