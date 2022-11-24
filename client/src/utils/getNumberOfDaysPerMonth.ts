/**
 * 현재 년도를 기준으로 각 달의 일 수를 반환한다.
 */
const getNumberOfDaysPerMonth = (year: number): number[] => {
  const numberOfDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 4 === 0) {
    numberOfDaysPerMonth[1] = 29;
  }

  return numberOfDaysPerMonth;
};

export default getNumberOfDaysPerMonth;
