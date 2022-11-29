import theme from "@styles/Theme";

export const judColors = (score: number) => {
  if (score >= 600) return theme.TIER_COLOR.CHAMPION;
  if (score >= 500) return theme.TIER_COLOR.DIAMOND;
  if (score >= 400) return theme.TIER_COLOR.PLATINUM;
  if (score >= 300) return theme.TIER_COLOR.GOLD;
  if (score >= 200) return theme.TIER_COLOR.SILVER;
  return theme.TIER_COLOR.BRONZE;
};
