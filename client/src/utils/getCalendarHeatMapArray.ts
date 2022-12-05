import { NUMBER_OF_DAYS } from "@constants/consts";
import getNumberOfDaysPerMonth from "./getNumberOfDaysPerMonth";

interface CalendarHeatMapElement {
  month: number;
  day: number;
}

/**
 * 이번 달을 마지막으로 하는 최근 열 두달에 대한 heatmap 배열을 반환한다.
 */
const getCalendarHeatMapArray = (nowTimeStamp: Date) => {
  const currMonth = nowTimeStamp.getMonth() + 1;
  const calendarHeatMapArray: CalendarHeatMapElement[][] = [[]];

  const numberOfDaysPerMonthLastYear = getNumberOfDaysPerMonth(nowTimeStamp.getFullYear() - 1);
  const numberOfDaysPerMonthCurrYear = getNumberOfDaysPerMonth(nowTimeStamp.getFullYear());

  [
    ...numberOfDaysPerMonthCurrYear.slice(currMonth),
    ...numberOfDaysPerMonthLastYear.slice(0, currMonth),
  ].forEach((numberOfDays, i) => {
    Array(numberOfDays)
      .fill(0)
      .forEach((_, day) => {
        const endIndex = calendarHeatMapArray.length - 1;
        calendarHeatMapArray[endIndex].push({ month: currMonth + i + 1, day: day + 1 });
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
