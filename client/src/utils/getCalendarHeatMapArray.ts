import { NUMBER_OF_DAYS } from "@constants/consts";
import getNumberOfDaysPerMonth from "./getNumberOfDaysPerMonth";

interface CalendarHeatMapElement {
  month: number;
  day: number;
}

/**
 * 주어진 년도에 해당하는 모든 날짜(1/1~12/31) 정보를 일주일 단위 배열로 나눈 2차원 배열을 반환한다.
 */
const getCalendarHeatMapArray = (year: number) => {
  const [MONTH, DAY] = [1, 1];
  const emptyDayCount = new Date(year, MONTH - 1, DAY).getDay();
  const calendarHeatMapArray: CalendarHeatMapElement[][] = [[]];

  /**
   * 빈 날짜 채우기
   * ex) 2022년 1월 1일이 토요일이라면 빈 날짜 6개(일~금)를 채운다.
   */
  Array(emptyDayCount)
    .fill(0)
    .forEach(() => {
      const endIndex = calendarHeatMapArray.length - 1;
      calendarHeatMapArray[endIndex].push({ month: MONTH, day: 0 });
      if (calendarHeatMapArray[endIndex].length === NUMBER_OF_DAYS) {
        calendarHeatMapArray.push([]);
      }
    });

  /**
   * 모든 날짜 채우기
   */
  getNumberOfDaysPerMonth(year).forEach((numberOfDays, month) => {
    Array(numberOfDays)
      .fill(0)
      .forEach((_, day) => {
        const endIndex = calendarHeatMapArray.length - 1;
        calendarHeatMapArray[endIndex].push({ month: month + 1, day: day + 1 });
        if (calendarHeatMapArray[endIndex].length === NUMBER_OF_DAYS) {
          calendarHeatMapArray.push([]);
        }
      });
  });

  const endIndex = calendarHeatMapArray.length - 1;
  if (!calendarHeatMapArray[endIndex].length) {
    calendarHeatMapArray.pop();
  }

  return calendarHeatMapArray;
};

export default getCalendarHeatMapArray;
