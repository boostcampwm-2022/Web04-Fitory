import React from "react";
import CalendarElement from "@components/Calendar/CalendarElement";
import getExerciseStateForOneYear from "@utils/getExerciseStateForOneYear";
import * as s from "./style";

const CalendarBody = ({ date }) => {
  const today = date;
  const exerciseStateList = getExerciseStateForOneYear(today.year(), [
    "220103",
    "220104",
    "220107",
    "220108",
    "220111",
    "220112",
    "220113",
    "220114",
    "220115",
    "220116",
    "220117",
    "220118",
  ]);

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

  const calendarArr = () => {
    let days = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      days = days.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              const day = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              const month = day.month();
              const d = day.date() - 1;

              return (
                <CalendarElement
                  exerciseState={exerciseStateList[month][d]}
                  day={day}
                  today={today}
                  index={index}
                />
              );
            })}
        </tr>,
      );
    }
    return days;
  };

  return (
    <s.CalendarBody>
      <tr>{calendarArr()}</tr>
    </s.CalendarBody>
  );
};

export default CalendarBody;