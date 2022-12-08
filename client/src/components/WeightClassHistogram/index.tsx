import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

const data: ChartData<"bar", number[], string> = {
  labels: [
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
    "280",
  ],
  datasets: [
    {
      type: "bar",
      label: "인원 수",
      backgroundColor: "rgb(255, 99, 132)",
      data: [
        33, 9, 44, 55, 60, 22, 65, 23, 123, 56, 6, 23, 33, 9, 44, 55, 60, 22, 65, 23, 123, 56, 6,
        23, 33, 9, 44, 55, 60, 22, 65, 23, 123, 56, 6, 23, 33, 9, 44, 55, 60, 22, 65, 23, 123, 56,
        6, 23,
      ],
      borderColor: "red",
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "3대 챌린지 중량별 인원 분포",
    },
  },
};

const WeightClassHistogram = () => {
  return (
    <Bar options={options} data={data}>
      test
    </Bar>
  );
};

export default WeightClassHistogram;
