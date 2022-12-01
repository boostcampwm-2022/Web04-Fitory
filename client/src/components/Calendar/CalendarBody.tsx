import React from "react";
import dayjs from "dayjs";
import CalendarElement from "@components/Calendar/CalendarElement";
import getExerciseStateForOneYear from "@utils/getExerciseStateForOneYear";
import { NUMBER_OF_DAYS } from "@constants/consts";
import { DateTypes, FormatDay } from "@constants/enums";
import useAllExerciseDate from "@hooks/query/useAllExerciseDate";
import * as s from "./style";

const CalendarBody = ({ date }: { date: dayjs.Dayjs }) => {
  const today = date;
  const { exerciseDateList } = useAllExerciseDate();
  const exerciseStateList = getExerciseStateForOneYear(today.year(), exerciseDateList);

  const firstWeek = today.clone().startOf(DateTypes.MONTH).week();
  const lastWeek =
    today.clone().endOf(DateTypes.MONTH).week() === 1
      ? 53
      : today.clone().endOf(DateTypes.MONTH).week();

  return (
    <s.CalendarBody>
      <thead>
        <tr>
          {Array.from(Array(NUMBER_OF_DAYS)).map((_, i) => (
            <td key={FormatDay[i]}>
              <s.DayName>{FormatDay[i]}</s.DayName>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(lastWeek - firstWeek + 1)).map((_, extraWeek) => (
          <tr key={`${firstWeek + extraWeek}`}>
            {Array.from(Array(NUMBER_OF_DAYS)).map((__, extraDay) => {
              const day = today
                .clone()
                .startOf(DateTypes.YEAR)
                .week(firstWeek + extraWeek)
                .startOf(DateTypes.WEEK)
                .add(extraDay, DateTypes.DAY);
              const month = day.month();
              const currentDay = day.date() - 1;

              return (
                <CalendarElement
                  key={`${month}${currentDay}`}
                  exerciseState={exerciseStateList[month][currentDay]}
                  day={day}
                  today={today}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </s.CalendarBody>
  );
};

export default CalendarBody;
