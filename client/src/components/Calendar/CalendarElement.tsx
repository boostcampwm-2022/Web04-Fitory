import React from "react";
import dayjs from "dayjs";
import { DayTypes, ExerciseState, RoutePath } from "@constants/enums";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

interface CalendarElementProps {
  exerciseState: ExerciseState;
  day: dayjs.Dayjs;
  today: dayjs.Dayjs;
  isRoot: boolean;
  setDisplayDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarElement = ({
  exerciseState,
  day,
  today,
  isRoot,
  setDisplayDate,
}: CalendarElementProps) => {
  const navigate = useNavigate();
  let dayType = null;

  if (dayjs().format("YYYYMMDD") === day.format("YYYYMMDD")) {
    dayType = DayTypes.TODAY;
  } else if (day.format("MM") !== today.format("MM")) {
    dayType = DayTypes.OTHER_DAYS;
  } else {
    dayType = DayTypes.THIS_DAYS;
  }

  const handleClickEvent = () => {
    setDisplayDate(day.format("YYMMDD"));
  };

  const moveCalendarPageEvent = () => {
    navigate(RoutePath.CALENDAR);
  };

  return (
    <s.DayContainer dayType={dayType} onClick={!isRoot ? handleClickEvent : moveCalendarPageEvent}>
      <s.DayLabel dayType={dayType}>{day.format("D")}</s.DayLabel>
      <s.CompleteDot state={exerciseState} dayType={dayType} />
    </s.DayContainer>
  );
};

export default CalendarElement;
