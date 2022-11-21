import { ExerciseState } from "@constants/enums";
import getNumberOfDaysPerMonth from "./getNumberOfDaysPerMonth";

const addZeroPadding = (date: number) => {
  let dateString = date.toString();
  if (dateString.length === 1) {
    dateString = `0${dateString}`;
  }
  return dateString;
};

/**
 * 주어진 년도 동안의 모든 날짜에 대한 운동 상태를 반환한다.
 * @param year
 * @param recordDateList 사용자가 운동을 완료했던 날짜 리스트
 */
const getExerciseStateForOneYear = (year: number, recordDateList: string[]) => {
  const lastDigitOfYear = year.toString().slice(2);
  let numberOfNotExercised = 3;

  return getNumberOfDaysPerMonth(year).map((numberOfDays, month) => {
    return Array.from(Array(numberOfDays), (_, day) => {
      const date = lastDigitOfYear + addZeroPadding(month + 1) + addZeroPadding(day + 1);
      if (recordDateList[0] !== date) {
        numberOfNotExercised += 1;
        return numberOfNotExercised < 3 ? ExerciseState.REST : ExerciseState.IDLE;
      }
      recordDateList.shift();
      numberOfNotExercised = 0;
      return ExerciseState.EXERCISE;
    });
  });
};

export default getExerciseStateForOneYear;
