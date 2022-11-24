import React, { useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import Paper from "@components/design/Paper";
import CalendarHeader from "@components/Calendar/CalendarHeader";
import CalendarBody from "@components/Calendar/CalendarBody";
import * as s from "./style";

const Calendar = () => {
  dayjs.extend(weekOfYear);
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs());

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <CalendarHeader date={date} setDate={setDate} />
        <CalendarBody date={date} />
      </s.Wrapper>
    </Paper>
  );
};

export default Calendar;
