import { ExerciseState } from "@constants/enums";
import getExerciseStateForOneYear from "../getExerciseStateForOneYear";
import getNumberOfDaysPerMonth from "../getNumberOfDaysPerMonth";

const getInitExerciseStateList = (year: number) => {
  return getNumberOfDaysPerMonth(year).map((numberOfDays) => {
    return Array.from(Array(numberOfDays), () => ExerciseState.IDLE);
  });
};

describe("주어진 년도 동안의 모든 날짜에 대한 운동 상태를 반환한다.", () => {
  const year = 2022;

  test("빈 운동 날짜 리스트 테스트", () => {
    const exerciseStateList = getInitExerciseStateList(year);
    expect(getExerciseStateForOneYear(year, [])).toEqual(exerciseStateList);
  });

  test("운동 휴식(REST) 식별 테스트", () => {
    const recordDateList = ["220103", "220104", "220107", "220111"];
    const exerciseStateList = getInitExerciseStateList(year);
    exerciseStateList[0][2] = ExerciseState.EXERCISE;
    exerciseStateList[0][3] = ExerciseState.EXERCISE;
    exerciseStateList[0][4] = ExerciseState.REST;
    exerciseStateList[0][5] = ExerciseState.REST;
    exerciseStateList[0][6] = ExerciseState.EXERCISE;
    exerciseStateList[0][7] = ExerciseState.REST;
    exerciseStateList[0][8] = ExerciseState.REST;
    exerciseStateList[0][10] = ExerciseState.EXERCISE;
    exerciseStateList[0][11] = ExerciseState.REST;
    exerciseStateList[0][12] = ExerciseState.REST;
    expect(getExerciseStateForOneYear(year, recordDateList)).toEqual(exerciseStateList);
  });
});
