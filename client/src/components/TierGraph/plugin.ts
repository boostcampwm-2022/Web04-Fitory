import theme from "@styles/Theme";
import { Chart } from "chart.js";
import { AnyObject } from "immer/dist/types/types-internal";
import { returnTierStandard } from "@components/TierGraph/utils";

const drawColorGraph = (chart: Chart, weight: number) => {
  const { ctx } = chart;
  ctx.save();
  const standard = returnTierStandard(weight);
  const yAxis = chart.scales.y;
  const gradient = ctx.createLinearGradient(0, yAxis.top - 9, 0, yAxis.bottom);
  const silverValueLine = yAxis.getPixelForValue(standard[1]);
  const goldValueLine = yAxis.getPixelForValue(standard[2]);
  const platinumValueLine = yAxis.getPixelForValue(standard[3]);
  const diamondValueLine = yAxis.getPixelForValue(standard[4]);
  const championValueLine = yAxis.getPixelForValue(standard[5]);

  // Silver
  const silverOffset = (1 / yAxis.bottom) * silverValueLine;
  if (silverOffset > 0 && silverOffset < 1) {
    gradient.addColorStop(silverOffset, theme.TIER_COLOR.SILVER);
    gradient.addColorStop(silverOffset, theme.TIER_COLOR.BRONZE);
  }

  // Gold
  const goldOffset = (1 / yAxis.bottom) * goldValueLine;
  if (goldOffset > 0 && goldOffset < 1) {
    gradient.addColorStop(goldOffset, theme.TIER_COLOR.GOLD);
    gradient.addColorStop(goldOffset, theme.TIER_COLOR.SILVER);
  }
  // Platinum
  const platinumOffset = (1 / yAxis.bottom) * platinumValueLine;
  if (platinumOffset > 0 && platinumOffset < 1) {
    gradient.addColorStop(platinumOffset, theme.TIER_COLOR.PLATINUM);
    gradient.addColorStop(platinumOffset, theme.TIER_COLOR.GOLD);
  }
  // DIAMOND
  const diamondOffset = (1 / yAxis.bottom) * diamondValueLine;
  if (diamondOffset > 0 && diamondOffset < 1) {
    gradient.addColorStop(diamondOffset, theme.TIER_COLOR.DIAMOND);
    gradient.addColorStop(diamondOffset, theme.TIER_COLOR.PLATINUM);
  }
  // Champion
  const championOffset = (1 / yAxis.bottom) * championValueLine;
  if (championOffset > 0 && championOffset < 1) {
    gradient.addColorStop(championOffset, theme.TIER_COLOR.CHAMPION);
    gradient.addColorStop(championOffset, theme.TIER_COLOR.DIAMOND);
  }
  gradient.addColorStop(1, theme.TIER_COLOR.BRONZE);
  chart.data.datasets[0].borderColor = gradient;
  ctx.restore();
};

const drawTierLine = (chart: Chart) => {
  const yAxis = chart.scales.y;
  const { ctx } = chart;
  const chartOption = chart.options as any;
  if (chartOption.horizontalLine) {
    for (let index = 0; index < chartOption.horizontalLine.length; index += 1) {
      ctx.save();
      const line = chartOption.horizontalLine[index];
      const style = line.style ? line.style : theme.COLORS.LIGHT_BLUE;
      const yValue = line.y ? yAxis.getPixelForValue(line.y) : 0;
      ctx.lineWidth = 1;
      if (yValue) {
        ctx.beginPath();
        ctx.moveTo(40, yValue);
        ctx.lineTo(chart.width, yValue);
        ctx.setLineDash([5]);
        ctx.strokeStyle = style;
        ctx.stroke();
      }
      if (line.text) {
        ctx.fillStyle = style;
        ctx.fillText(line.text, 40, yValue + ctx.lineWidth - 5);
      }
      ctx.restore();
    }
  }
};

const plugin = (weight: number) => {
  return [
    {
      afterDatasetDraw: (chart: Chart) => {
        drawTierLine(chart);
      },
      afterLayout: (chart: Chart) => {
        drawColorGraph(chart, weight);
      },
    } as AnyObject,
  ];
};

export default plugin;
