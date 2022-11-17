const COLORS = {
  DEEP_GRAY: "#4E5261",
  LIGHT_GRAY: "#C0C0C0",

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
  default: "767px",
  mobile: "480px",
};

const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  MAX_WIDTH,
};

export default theme;
