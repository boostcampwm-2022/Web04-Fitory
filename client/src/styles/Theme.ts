const COLORS = {
  DEEP_GRAY: "#4E5261",
  LIGHT_GRAY: "#C0C0C0",
  PLACEHOLDER_GRAY: "#e2e2e2",

  DEEP_BLUE: "#102361",
  LIGHT_BLUE: "#698AFA",
  HOVER_BLUE: "#577af2",

  WHITE: "#FFFFFF",
  ASH_WHITE: "#F5F5F5",

  DEEP_PURPLE: "#B4BEE0",
  LIGHT_PURPLE: "#B4BEE0",

  RED: "#FF5858",

  FILTER_GRAY: "invert(79%) sepia(1%) saturate(0%) hue-rotate(95deg) brightness(97%) contrast(95%)",
  FILTER_BLUE:
    "invert(52%) sepia(17%) saturate(1814%) hue-rotate(190deg) brightness(103%) contrast(96%)",
} as const;

const FONT_SIZE = {
  EXTRA_SMALL: "1.2rem",
  SMALL: "1.4rem",
  MEDIUM: "1.6rem",
  LARGE: "1.8rem",
} as const;

const FONT_WEIGHT = {
  BOLD: 700,
} as const;

const MAX_WIDTH = {
  DEFAULT: "767px",
  MOBILE: "480px",
} as const;

const TIER_COLOR = {
  BRONZE: "#ad5600",
  SILVER: "#435f7a",
  GOLD: "#ec9a00",
  PLATINUM: "#27e2a4",
  DIAMOND: "#00b4fc",
  CHAMPION: "#ff0062",
} as const;

const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  MAX_WIDTH,
  TIER_COLOR,
} as const;

export default theme;
