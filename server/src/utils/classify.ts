export const weightGradeList = [53, 59, 66, 74, 83, 93, 105, 120];

export const volumeGradeList = [
  [110, 190, 223, 313, 404],
  [127, 213, 254, 359, 462],
  [142, 241, 287, 396, 505],
  [159, 266, 318, 437, 558],
  [175, 289, 344, 475, 605],
  [186, 309, 371, 504, 638],
  [198, 331, 398, 541, 679],
  [200, 335, 400, 542, 681],
  [212, 352, 422, 572, 715],
];

export function classifyToTier(weight: number, volume: number) {
  const weightGrade = weightGradeList.reduce((acc, cur, index) => {
    return weight > cur ? index + 1 : acc;
  }, 0);
  const tier = volumeGradeList[weightGrade].reduce((acc, cur, index) => {
    return volume > cur ? index + 2 : acc;
  }, 1);
  return tier;
}
