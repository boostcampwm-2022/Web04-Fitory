import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import Calendar from "@components/Calendar";
import ExerciseSetContainer from "@components/ExerciseSetContainer";
import useRecentChallengeTime from "@hooks/query/useRecentChallengeTime";
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
          <p>* 해당 일자에 운동 기록이 없어요 :(</p>
        </s.NoticeContainer>
      )}
    </s.ExerciseHistoryContainer>
  );
};

const CalendarPage = () => {
  const { nowTimeStamp } = useRecentChallengeTime();
  const [calendarMonth, setCalendarMonth] = useState(nowTimeStamp.getMonth() + 1);
  const [displayDate, setDisplayDate] = useState<string>("");

  return (
    <PageTemplate isRoot={false} title="캘린더">
      <Calendar
        isRoot={false}
        setCalendarMonth={setCalendarMonth}
        setDisplayDate={setDisplayDate}
      />
      <ExerciseHistory month={calendarMonth} displayDate={displayDate} />
    </PageTemplate>
  );
};

export default CalendarPage;
