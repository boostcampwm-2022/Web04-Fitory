import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import Paper from "@components/design/Paper";
import CalendarHeader from "@components/Calendar/CalendarHeader";
import CalendarBody from "@components/Calendar/CalendarBody";
import { RoutePath } from "@constants/enums";
import * as s from "./style";

dayjs.extend(weekOfYear);

interface CalendarProps {
  isRoot: boolean;
  setCalendarMonth?: Dispatch<SetStateAction<number>>;
  setDisplayDate?: Dispatch<SetStateAction<string>>;
}

const Calendar = ({ isRoot, setCalendarMonth, setDisplayDate }: CalendarProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    if (setCalendarMonth) {
      setCalendarMonth(date.month() + 1);
    }
  }, [date, setCalendarMonth]);

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper isRoot={isRoot} onClick={() => isRoot && navigate(RoutePath.CALENDAR)}>
        <CalendarHeader date={date} setDate={setDate} />
        <CalendarBody today={date} setDisplayDate={setDisplayDate} />
      </s.Wrapper>
    </Paper>
  );
};

export default Calendar;
