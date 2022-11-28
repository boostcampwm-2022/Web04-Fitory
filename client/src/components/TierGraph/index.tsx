import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import theme from "@styles/Theme";

ChartJS.register(...registerables);

interface MockDataType {
  date: string;
  score: number;
}

const TierGraph = () => {
  const mockData = [
    { date: "220312", score: 0 },
    { date: "220312", score: 20 },
    { date: "220313", score: 25 },
    { date: "220314", score: 110 },
    { date: "220315", score: 240 },
    { date: "220316", score: 215 },
    { date: "220318", score: 210 },
    { date: "220319", score: 210 },
    { date: "220320", score: 1000 },
  ];

  const [labelInfo, setLabelInfo] = useState<string[]>([]);
  const [dataInfo, setDataInfo] = useState<number[]>([]);

  const plugin = [
    {
      afterLayout: (chart: any) => {
        const { ctx } = chart;
        ctx.save();
        const yAxis = chart.scales.y;
        const gradient = ctx.createLinearGradient(0, yAxis.top, 0, yAxis.bottom);

        const silverValueLine = yAxis.getPixelForValue(50);
        const goldValueLine = yAxis.getPixelForValue(200);
        const platinumValueLine = yAxis.getPixelForValue(500);

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

        gradient.addColorStop(1, theme.TIER_COLOR.BRONZE);
        chart.data.datasets[0].borderColor = gradient;
        chart.data.datasets[0].pointBackgroundColor = gradient;
        ctx.restore();
      },
    },
  ];

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    lineTension: 0,
    pointRadius: 5,
    pointHoverRadius: 10,
    intersect: {
      mode: "mode" as const,
      intersect: false,
    },
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
        max: 1500,
      },
    },
    options: {
      legend: {
        display: false,
      },
    },
  };
  const graphData = {
    labels: labelInfo,
    datasets: [
      {
        fill: false,
        label: "SDB Score",
        data: dataInfo,
        tension: 0.3,
      },
    ],
  };

  useEffect(() => {
    const dates: string[] = [];
    const scores: number[] = [];
    mockData.reduce((acc: MockDataType, cur: MockDataType) => {
      dates.push(cur.date);
      scores.push(cur.score);
    }, []);
    setLabelInfo(dates);
    setDataInfo(scores);
  }, []);

  return (
    <div>
      <Chart plugins={plugin} options={options} type="line" data={graphData} />
    </div>
  );
};

export default TierGraph;
