import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import Paper from "@components/design/Paper";
import CalendarHeader from "@components/Calendar/CalendarHeader";
import CalendarBody from "@components/Calendar/CalendarBody";
import ExerciseAPI from "@api/ExerciseAPI";
import * as s from "./style";

const Calendar = ({
  isRoot,
  setHistory,
  setDisplayDate,
}: {
  isRoot: boolean;
  setHistory: React.Dispatch<React.SetStateAction<{}>>;
  setDisplayDate: React.Dispatch<React.SetStateAction<string>>;
}) => {
  dayjs.extend(weekOfYear);
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    if (!isRoot) {
      (async () => {
        const month = parseInt(date.format("MM"));
        const history = await ExerciseAPI.getSingleMonthHistory(month);
        setHistory(history);
      })();
    }
  }, [date]);

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <CalendarHeader date={date} setDate={setDate} />
        <CalendarBody date={date} isRoot={isRoot} setDisplayDate={setDisplayDate} />
      </s.Wrapper>
    </Paper>
  );
};

export default Calendar;
