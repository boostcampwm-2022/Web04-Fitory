import React, { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import { DayTypes, ExerciseState } from "@constants/enums";
import * as s from "./style";

interface CalendarElementProps {
  exerciseState: ExerciseState;
  day: dayjs.Dayjs;
  today: dayjs.Dayjs;
  displayDate?: string;
  setDisplayDate?: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<dayjs.Dayjs>>;
}

const CalendarElement = ({
  exerciseState,
  day,
  today,
  displayDate,
  setDisplayDate,
  setDate,
}: CalendarElementProps) => {
  let dayType: DayTypes;

  if (dayjs().format("YYYYMMDD") === day.format("YYYYMMDD")) {
    dayType = DayTypes.TODAY;
  } else if (day.format("MM") < today.format("MM")) {
    dayType = DayTypes.PREV_DAYS;
  } else if (day.format("MM") > today.format("MM")) {
    dayType = DayTypes.NEXT_DAYS;
  } else {
    dayType = DayTypes.THIS_DAYS;
  }

  const handleClickEvent = () => {
    if (dayType === DayTypes.PREV_DAYS) {
      const prevDate = today.clone().subtract(1, "month");
      setDate(prevDate);
    }

    if (dayType === DayTypes.NEXT_DAYS) {
      const nextDate = today.clone().add(1, "month");
      setDate(nextDate);
    }

    if (setDisplayDate) {
      setDisplayDate(day.format("YYMMDD"));
    }
  };

  return (
    <s.DayContainer dayType={dayType} hover={Boolean(setDisplayDate)} onClick={handleClickEvent}>
      <s.DayLabel dayType={dayType} isActive={displayDate === day.format("YYMMDD")}>
        {day.format("D")}
      </s.DayLabel>
      <s.CompleteDot state={exerciseState} dayType={dayType} />
    </s.DayContainer>
  );
};

export default CalendarElement;
