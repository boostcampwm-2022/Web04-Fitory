import theme from "@styles/Theme";

export const returnTierStandard = (weight: number) => {
  if (weight >= 0 && weight <= 53) {
    return [0, 111, 191, 224, 314, 405];
  }
  if (weight >= 54 && weight <= 59) {
    return [0, 128, 214, 255, 360, 463];
  }
  if (weight >= 60 && weight <= 66) {
    return [0, 143, 242, 298, 397, 506];
  }
  if (weight >= 67 && weight <= 74) {
    return [0, 160, 267, 319, 438, 559];
  }
  if (weight >= 75 && weight <= 83) {
    return [0, 176, 290, 345, 476, 606];
  }
  if (weight >= 84 && weight <= 93) {
    return [0, 187, 310, 372, 505, 639];
  }
  if (weight >= 94 && weight <= 105) {
    return [0, 199, 332, 390, 542, 680];
  }
  if (weight >= 106 && weight <= 120) {
    return [0, 201, 336, 401, 543, 682];
  }

  return [0, 213, 353, 423, 573, 716];
};

export const judColors = (score: number, weight: number) => {
  const standard = returnTierStandard(weight);
  if (score >= standard[5]) return theme.TIER_COLOR.CHAMPION;
  if (score >= standard[4]) return theme.TIER_COLOR.DIAMOND;
  if (score >= standard[3]) return theme.TIER_COLOR.PLATINUM;
  if (score >= standard[2]) return theme.TIER_COLOR.GOLD;
  if (score >= standard[1]) return theme.TIER_COLOR.SILVER;
  return theme.TIER_COLOR.BRONZE;
};

export const judLine = (score: number, weight: number) => {
  const standard = returnTierStandard(weight);
  if (score >= standard[5]) return 5;
  if (score >= standard[4]) return 4;
  if (score >= standard[3]) return 3;
  if (score >= standard[2]) return 2;
  if (score >= standard[1]) return 1;
  return 0;
};
