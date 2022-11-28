import theme from "@styles/Theme";

const drawColorGraph = (chart: any) => {
  const { ctx } = chart;
  ctx.save();
  const yAxis = chart.scales.y;
  const gradient = ctx.createLinearGradient(0, yAxis.top - 9, 0, yAxis.bottom);

  const silverValueLine = yAxis.getPixelForValue(200);
  const goldValueLine = yAxis.getPixelForValue(300);
  const platinumValueLine = yAxis.getPixelForValue(400);
  const diamondValueLine = yAxis.getPixelForValue(500);
  const championValueLine = yAxis.getPixelForValue(600);
  // Silver

  const silverOffset = (1 / yAxis.bottom) * silverValueLine;
  gradient.addColorStop(silverOffset, theme.TIER_COLOR.SILVER);
  gradient.addColorStop(silverOffset, theme.TIER_COLOR.BRONZE);

  // Gold
  const goldOffset = (1 / yAxis.bottom) * goldValueLine;
  gradient.addColorStop(goldOffset, theme.TIER_COLOR.GOLD);
  gradient.addColorStop(goldOffset, theme.TIER_COLOR.SILVER);

  // Platinum
  const platinumOffset = (1 / yAxis.bottom) * platinumValueLine;
  gradient.addColorStop(platinumOffset, theme.TIER_COLOR.PLATINUM);
  gradient.addColorStop(platinumOffset, theme.TIER_COLOR.GOLD);

  // DIAMOND
  const diamondOffset = (1 / yAxis.bottom) * diamondValueLine;
  gradient.addColorStop(diamondOffset, theme.TIER_COLOR.DIAMOND);
  gradient.addColorStop(diamondOffset, theme.TIER_COLOR.PLATINUM);

  // Champion
  const championOffset = (1 / yAxis.bottom) * championValueLine;
  gradient.addColorStop(championOffset, theme.TIER_COLOR.CHAMPION);
  gradient.addColorStop(championOffset, theme.TIER_COLOR.DIAMOND);

  gradient.addColorStop(1, theme.TIER_COLOR.BRONZE);
  chart.data.datasets[0].borderColor = gradient;
  ctx.restore();
};

const drawTierLine = (chart: any) => {
  const yAxis = chart.scales.y;
  const { ctx } = chart;
  if (chart.options.horizontalLine) {
    for (let index = 0; index < chart.options.horizontalLine.length; index += 1) {
      const line = chart.options.horizontalLine[index];
      const style = line.style ? line.style : theme.COLORS.LIGHT_BLUE;
      const yValue = line.y ? yAxis.getPixelForValue(line.y) : 0;
      ctx.lineWidth = 1;
      line.text = line.text ? line.text : "";
      if (yValue) {
        ctx.beginPath();
        ctx.moveTo(35, yValue);
        ctx.lineTo(chart.width, yValue);
        ctx.setLineDash([5]);
        ctx.strokeStyle = style;
        ctx.stroke();
      }
      if (line.text) {
        ctx.fillStyle = style;
        ctx.fillText(line.text, 35, yValue + ctx.lineWidth - 5);
      }
    }
  }
};

const plugin = [
  {
    afterDatasetDraw: (chart: any) => {
      drawTierLine(chart);
    },
    afterLayout: (chart: any) => {
      drawColorGraph(chart);
    },
  },
];

export default plugin;
