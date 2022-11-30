import theme from "@styles/Theme";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  intersect: false,
  responsive: false,
  maintainAspectRatio: false,
  lineTension: 0,
  pointRadius: 3,
  pointHoverRadius: 5,

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 0,
      max: 700,
    },
  },
  horizontalLine: [
    {
      y: 200,
      style: theme.TIER_COLOR.SILVER,
      text: "S",
    },
    {
      y: 300,
      style: theme.TIER_COLOR.GOLD,
      text: "G",
    },
    {
      y: 400,
      style: theme.TIER_COLOR.PLATINUM,
      text: "P",
    },
    {
      y: 500,
      style: theme.TIER_COLOR.DIAMOND,
      text: "D",
    },
    {
      y: 600,
      style: theme.TIER_COLOR.CHAMPION,
      text: "C",
    },
  ],
};

export default options;
