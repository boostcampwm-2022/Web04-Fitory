import React from "react";
import dayjs from "dayjs";
import * as s from "./style";

const CalendarElement = ({
  exerciseState,
  day,
  today,
  index,
}: {
  exerciseState: any;
  day: any;
  today: any;
  index: number;
}) => {
  let dayType = null;

  if (dayjs().format("YYYYMMDD") === day.format("YYYYMMDD")) {
    dayType = "today";
  } else if (day.format("MM") !== today.format("MM")) {
    dayType = "otherDays";
  } else if (index === 6) {
    dayType = "saturday";
  } else if (index === 0) {
    dayType = "sunday";
  } else {
    dayType = "others";
  }
  return (
    <s.DayContainer dayType={dayType}>
      <s.DayLabel exerciseState={exerciseState}>{day.format("D")}</s.DayLabel>
    </s.DayContainer>
  );
};

export default CalendarElement;
