import theme from "@styles/Theme";
import { judLine, returnTierStandard } from "@components/TierGraph/utils";

const setHorizontalLineLine = (weight: number) => {
  const standard = returnTierStandard(weight);
  return [
    {
      y: standard[1],
      style: theme.TIER_COLOR.SILVER,
      text: "S",
    },
    {
      y: standard[2],
      style: theme.TIER_COLOR.GOLD,
      text: "G",
    },
    {
      y: standard[3],
      style: theme.TIER_COLOR.PLATINUM,
      text: "P",
    },
    {
      y: standard[4],
      style: theme.TIER_COLOR.DIAMOND,
      text: "D",
    },
    {
      y: standard[5],
      style: theme.TIER_COLOR.CHAMPION,
      text: "C",
    },
  ];
};
const drawChartOption = (scores: number[], weight: number) => {
  const maxScore = scores.length !== 0 ? Math.max(...scores) : 1000;
  const minScore = scores.length !== 0 ? Math.min(...scores) : 0;

  const minLine = judLine(minScore, weight) === 0 ? 0 : judLine(minScore, weight) - 1;
  const maxLine = judLine(maxScore, weight);

  const line = setHorizontalLineLine(weight).slice(minLine, maxLine + 2);

  return {
    plugins: {
      legend: {
        display: false,
      },
    },
    intersect: false,
    lineTension: 0,
    pointRadius: 3,
    pointHoverRadius: 5,
    maintainAspectRatio: false,

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
        min: minScore - 50 < 0 ? 0 : minScore - 50,
        max: maxScore + 100,
      },
    },

    horizontalLine: line,
  };
};

export default drawChartOption;
