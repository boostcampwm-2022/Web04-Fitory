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
  ];

  const [labelInfo, setLabelInfo] = useState<string[]>([]);
  const [dataInfo, setDataInfo] = useState<number[]>([]);

  const options = {
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
        max: 300,
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
        label: "SDB Score",
        data: dataInfo,
        backgroundColor: theme.COLORS.LIGHT_BLUE,
        borderColor: theme.COLORS.LIGHT_BLUE,
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
      <Chart options={options} type="line" data={graphData} />
    </div>
  );
};

export default TierGraph;
