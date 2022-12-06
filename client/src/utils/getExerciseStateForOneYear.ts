import { ExerciseState } from "@constants/enums";
import getNumberOfDaysPerMonth from "./getNumberOfDaysPerMonth";
import addZeroPaddingToNumber from "./addZeroPaddingToNumber";

const checkFutureDate = (
  nowTimeStamp: Date,
  targetYear: number,
  targetMonth: number,
  targetDay: number,
) => {
  const nowYear = nowTimeStamp.getFullYear();
  const nowMonth = nowTimeStamp.getMonth() + 1;
  const nowDay = nowTimeStamp.getDate();

  if (nowYear < targetYear) {
    return true;
  }

  if (nowYear === targetYear) {
    if (nowMonth < targetMonth) {
      return true;
    }
    if (nowMonth === targetMonth && nowDay < targetDay) {
      return true;
    }
  }

  return false;
};

/**
 * 주어진 년도 동안의 모든 날짜에 대한 운동 상태를 반환한다.
 * @param year
 * @param recordDateList 사용자가 운동을 완료했던 날짜 리스트
 * @param nowTimeStamp 현재 타임 스탬프
 */
const getExerciseStateForOneYear = (
  year: number,
  recordDateList: string[],
  nowTimeStamp?: Date,
) => {
  const lastDigitOfYear = year.toString().slice(2);
  let numberOfNotExercised = 3;

  return getNumberOfDaysPerMonth(year).map((numberOfDays, month) =>
    Array.from(Array(numberOfDays), (_, day) => {
      if (nowTimeStamp && checkFutureDate(nowTimeStamp, year, month + 1, day + 1)) {
        return ExerciseState.IDLE;
      }

      const yymmddFormatDate =
        lastDigitOfYear + addZeroPaddingToNumber(month + 1) + addZeroPaddingToNumber(day + 1);

      if (recordDateList[0] !== yymmddFormatDate) {
        numberOfNotExercised += 1;
        return numberOfNotExercised < 3 ? ExerciseState.REST : ExerciseState.IDLE;
      }

      recordDateList.shift();
      numberOfNotExercised = 0;
      return ExerciseState.EXERCISE;
    }),
  );
};

export default getExerciseStateForOneYear;
