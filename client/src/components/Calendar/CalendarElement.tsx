import React from "react";
import dayjs from "dayjs";
import { ExerciseState } from "@constants/enums";
import * as s from "./style";

interface CalendarElementProps {
  exerciseState: ExerciseState;
  day: dayjs.Dayjs;
  today: dayjs.Dayjs;
}

const CalendarElement = ({ exerciseState, day, today }: CalendarElementProps) => {
  let dayType = null;

  if (dayjs().format("YYYYMMDD") === day.format("YYYYMMDD")) {
    dayType = "today";
  } else if (day.format("MM") !== today.format("MM")) {
    dayType = "otherDays";
  } else {
    dayType = "others";
  }
  return (
    <s.DayContainer dayType={dayType}>
      <s.DayLabel dayType={dayType}>{day.format("D")}</s.DayLabel>
      <s.CompleteDot state={exerciseState} />
    </s.DayContainer>
  );
};

export default CalendarElement;
