const COLORS = {
  DEEP_GRAY: "#4E5261",
  LIGHT_GRAY: "#C0C0C0",

  DEEP_BLUE: "#102361",
  LIGHT_BLUE: "#698AFA",

  WHITE: "#FFFFFF",
  ASH_WHITE: "#F5F5F5",

  DEEP_PURPLE: "#B4BEE0",
  LIGHT_PURPLE: "#B4BEE0",

  RED: "#FF5858",
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

const MAX_WIDTH = "767px";

const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  MAX_WIDTH,
};

export default theme;
