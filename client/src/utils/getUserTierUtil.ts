import theme from "@styles/Theme";

export const getTierColor = (tier: number) => {
  switch (tier) {
    case 1:
      return theme.TIER_COLOR.BRONZE;
    case 2:
      return theme.TIER_COLOR.SILVER;
    case 3:
      return theme.TIER_COLOR.GOLD;
    case 4:
      return theme.TIER_COLOR.PLATINUM;
    case 5:
      return theme.TIER_COLOR.DIAMOND;
    case 6:
      return theme.TIER_COLOR.CHAMPION;
    default:
      return theme.COLORS.LIGHT_BLUE;
  }
};
